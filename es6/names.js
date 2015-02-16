import $ from './jspm_packages/github/components/jquery@2.1.3/jquery'

class Names {
	constructor() {
		this.names = ['John', 'Paul', 'George']
		this.nameList = $('.js-name-list')
		this.form = $('.js-form')
		this.name = $('.js-form__name')

	  this.form.submit(this._submitHandler.bind(this));
	}

	render() {
		// Clear names
  	this.nameList.empty()

  	// Add names
		this.nameList.append(`${this._renderNames(this.names)}`)
	}

	_renderNames(names) {
		var nameItems = names
  		.map((name) => { return `<li>${name}</li>` })
  		.join('')

  	return nameItems
	}

	_submitHandler(e) {
	  e.preventDefault()

	  var newName = this.name.val()

	  this.names.push(newName)
	  this.render()
	  this.name.val('')
	}
}

export default new Names()
