import yo from 'yo-yo'
import layout from '../layout'
import picture from '../picture-card'
import translate from '../../translate'

export default function (picturesAPI) {
  var el = yo`<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 xl6 offset-xl3 center-align">
        <form enctype="multipart/form-data" class="form-upload" id="form-upload" onsubmit=${submit}>
          <div id="fileName" class="fileUpload btn btn-flat cyan">
            <label for="file"><i class="fa fa-camera"></i> ${translate.message('upload-picture')}</label>
            <input name="picture" id="file" type="file" class="upload hide" onchange=${toggleButtons}/>
          </div>
          <button id="btnUpload" type="submit" class="btn btn-flat hide cyan ">
            ${translate.message('upload')}
          </button>
          <button onclick=${cancel} id="btnCancel" type="button" class="btn btn-flat hide red">
            <i class="fa fa-times"></i>
          </button>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 xl6 offset-xl3">
        ${picturesAPI.map(function (image) {
          return picture(image)
        })}
      </div>
    </div>
  </div>`

  function toggleButtons () {
    document.getElementById('fileName').classList.toggle('hide')
    document.getElementById('btnUpload').classList.toggle('hide')
    document.getElementById('btnCancel').classList.toggle('hide')
  }

  function cancel () {
    toggleButtons()

    document.getElementById('form-upload').reset()
  }

  function submit (ev) {
    ev.preventDefault()

    var data = new FormData(this)

    const myRequest = new Request(
      '/api/pictures',
      {
        method: 'POST',
        body: data
      }
    )

    fetch(myRequest)
      .then(response => console.log(response))
  }

  return layout(el)
}
