class BoardsController < ApplicationController
  before_action :set_board, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [ :create, :update, :destroy ]

  # GET /boards
  def index
    @boards = Board.all

    render json: @boards, include: :posts, status: :ok

    # @user = User.find(params:user_id)
    # @boards = Board.where(user_id: @user.id)
    # render json: @boards, include: :user, status: :ok
  end

  # GET /boards/1
  def show
    render json: @board, include: :posts, status: :ok
  end

  # POST /boards
  def create
    @board = Board.new(board_params)
    @board.user = @current_user

    # this should include posts
    if @board.save
      render json: @board, include: :posts,  status: :created
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /boards/1
  def update
    if @board.update(board_params)
      render json: @board, include: :posts
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  # DELETE /boards/1
  def destroy
    @board.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_board
      @board = Board.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def board_params
      params.require(:board).permit(:name, :description)
    end
end
