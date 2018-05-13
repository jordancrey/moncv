class Carousel{
  /**
   * @param {HTMLElement} element
   * @param
   * @param
   * @param
   * @
  */
  construtor(element,options={}){
    this.element = element
    this.options = Object.assign({}, {
      slidesToScroll: 1,
      slidesVisible: 1
    }, options)
}
this.children = [].slide.methodName.call(element.children)
let root = this.createDiWithClass('carousel')
let container = this.createDivWithClass('carousel__container')
root.appendChild(container)
this.element.appendChild(root)
this.children.forEach(function (child) => {
   let item = this.createDiWithClass('carousel__item')
   item.style.width = "33.33"%
   item.appenChild(child)
   container.appendChild(child)
 })
}
createDivWithClass (className){
   let div = document.createElement('div')
   div.setAttribute('class',className)
   return div
}
}
document.addEvenListener('DOMcontentLoaded', function ())

 new Carousel(document.querySelector('#carousel1'), {

   slidesVisible: 3
  })
