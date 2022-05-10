var shadowHost = window.document.querySelector
('#shadowHost');
//why we creating class ??
class className extends HTMLElement{
  constructor(){
    super();// ??
    //enable shadowHost in template, globalDOM-access=open
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(shadowHost.content.
cloneNode(true));
   //this.shadowRoot.createElement('div').cloneNode(true);
  }
}
//custom-name must have hyphen-
customElements.define('custom-name', className);