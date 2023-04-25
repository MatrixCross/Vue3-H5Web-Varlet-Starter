import mitt from 'mitt'

type Events = {
  appBarBackClick: void
  appBarGoHomeClick: void
  appBarConfirmClick: void
  appBarLikeClick: void
  appBarStarClick: void
}

export const emitter = mitt<Events>()
