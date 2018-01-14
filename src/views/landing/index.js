import yo from 'yo-yo'

export default function (box) {
  return yo`<div class="container">
    <div class="row">
      <div class="col s10 m12 push-s1">
        <div class="row">
          <div class="col m5 hide-on-small-only">
            <img src="./images/iphone.png" class="iphone">
          </div>

          ${box}
        </div>
      </div>
    </div>
  </div>`
}
