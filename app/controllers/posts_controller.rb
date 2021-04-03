class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [ :create, :update, :destroy ]

  # GET /posts
  def index
    # @posts = Post.all
    # render json: @posts

    @board = Board.find(params[:board_id])
    @posts = Post.where(board_id: @board.id).all

    # @posts = Post.find_by(id: params[:board_id])

    render json: @posts, include: {board: {include: :user}}, status: :ok
  end

  # GET /posts/1
  def show
    
    render json: @post, include: :board
  end

  # POST /posts
  def create
    @board = Board.find(params[:board_id])
    @post = Post.where(board_id: @board.id).new(post_params)
    # @post = Post.new(post_params)
    
    @post.board = @board
    # @post.user = @current_user

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
    render json: @post.errors, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:name, :description, :image_url)
    end
end
