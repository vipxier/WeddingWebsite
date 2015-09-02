class OurWeddingController < ApplicationController
	def index
		@images = Dir.glob('app/assets/images/Wedding1/*.jpg')
	end
end
