import yo from 'yo-yo'
import translate from '../../translate'

export default function (pic) {
  var el

  function render (image) {
    return yo`<div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${image.url}">
      </div>
      <div class="card-content">
        <a href="/user/${image.user.username}" class="card-title">
          <img src="${image.user.avatar}" class="avatar" />
          <span class="username">${image.user.username}</span>
        </a>
        <small class="time right">${translate.date.format(new Date(image.date))}</small>
        <p>
          <a class="left ${image.liked ? 'hide' : ''}" href="#" onclick=${like.bind(null, true)}>
            <i class="fa fa-heart-o"></i>
          </a>

          <a class="left ${image.liked ? '' : 'hide'}" href="#" onclick=${like.bind(null, false)}>
            <i class="fa fa-heart"></i>
          </a>
          <span class="left likes">${translate.message('likes', {'likes': image.likes})}</span>
        </p>
      </div>
    </div>`
  }

  function like (liked) {
    pic.liked = liked
    pic.likes += liked ? 1 : -1

    var newEl = render(pic)

    yo.update(el, newEl)

    return false
  }

  el = render(pic)

  return el
}
