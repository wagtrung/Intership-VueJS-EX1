
    Vue.component('navaddmodal', {
        template: `
        <div>
            <div class="container " >
                <button type="button" class="btn btn-success btn-lg d-flex align-items-center" data-toggle="modal" data-target="#myModal">
                    <svg width="1.6em" height="1.6em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                    </svg>
                    <span>Add item</span> </button>
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                    
                    <div class="modal-content ">
                    <form @submit.submit.prevent="childfunc()" >

                        <div class="modal-header">
                        <h4 class="modal-title">Add some item into the list</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div class="modal-body">
                            
                                
                                <div class="form-group ">
                                    <label class="required font-weight-bold">Your Product Title</label>
                                    <input v-model="title" 
                                    class="form-control "
                                    :class="titleClassCheck()"
                                    @change="checkInputTitle()"   placeholder="Enter your title">
                                    <div class="valid-feedback position-absolute" >
                                        Wow, Nice title!
                                    </div>
                                    <div class="invalid-feedback position-absolute">
                                        {{titleerrorannounce}}
                                    </div>
                                </div>
        
                                <div class="form-group">
                                    <label class="required  font-weight-bold">Product Price</label>
                                    <input v-model="price" type="number"  
                                    :class="priceClassCheck()" @change="checkInputPrice()" class="form-control"  placeholder="Enter Price">
                                    <div class="valid-feedback position-absolute" >
                                        yay, Look great!
                                    </div>
                                    <div class="invalid-feedback position-absolute">
                                        {{priceerrorannounce}}
                                    </div>
                                    
                                </div>
                                
                                <div class="form-group">
                                    <label class=" font-weight-bold">Your Subtitle:</label>
                                    <input v-model="subtitle"type="text" 
                                    class="form-control"
                                    :class="subtitleClassCheck()"
                                    placeholder="Enter subtitle">
                                    <div class="valid-feedback position-absolute" >
                                        Awesome description!
                                    </div>
                                </div>

                                <div class="form-group ">
                                <label class=" font-weight-bold">Your Tags:</label>
                                <div class="form-row ">
                                    <div class=" col-8 ">
                                        <input v-model="tag" type="text" class="form-control" placeholder="Enter tags">
                                    </div>
                                    <button class="btn  bg-primary text-white " @click="addtag"> add tag </button>
                                    
                                </div>
                                <h4  class="d-inline" v-for="tag in tags"> 
                                <span class="badge badge-primary mr-2 my-3"> #{{tag}} </span>
                                </h4>
                                </div>
                                
                                <input ref="changethis" style="display:none" type="file" @change="uploadFile()" >
                                <button class="btn btn-block btn-lg bg-dark text-white " @click="haddleClickUploadImg()" :class="{'uploadedImg': file}"> Upload Image </button>

                        </div>
                        <div class="modal-footer">
                            <input type="submit" value="Add new product" class="btn btn-success btn-lg float-right ">
                        </div>
                    
                    </form>

                    </div>
                </div>
                </div>
        </div>
        </div>
            </div>`,
        props: {
            
        },
        data() {
            return {
                tag: null,
                tags:[] ,
                title: '',
                subtitle: '',
                price: 0,
                file: null,
                validVar: {
                    title: false,
                    price: 0
                },
                errorVar: {
                    title: false,
                    price: 0
                },
                titleerrorannounce: '',
                priceerrorannounce: '',
            }
        },
        methods: {
            uploadFile() {
                this.file = document.querySelector('input[type=file]').files[0];
            },
            childfunc() {
                this.titleerrorannounce = ''
                this.priceerrorannounce = ''
                if (!this.title) {
                    this.errorVar.title = true
                    this.titleerrorannounce = 'Oh no, Product Title is required'
                }
                if (this.price == 0 || this.price < 0) {
                    this.errorVar.price = true
                    this.priceerrorannounce = 'Hey, Product Price must be larger than 0'
                }
            
                if (this.price > 0 && this.title.length > 0) {
                    this.$emit('childevent', {
                        id: Math.random(),
                        title: this.title,
                        subtitle: !this.subtitle ? "Empty subtitle" : this.subtitle ,
                        price: this.price,
                        srcimg: URL.createObjectURL(this.file),
                        tags: this.tags
                    })
                    this.title = ''
                    this.subtitle = ''
                    this.price = 0
                    this.file = null
                    this.validVar = {}
                    this.errorVar = {}
                }
            },
            checkInputTitle() {
                if (this.title.length > 0) {
                    this.errorVar.title = false
                    this.validVar.title = true
                    this.titleerrorannounce = ''
                }
                else {
                    this.errorVar.title = true
                    this.validVar.title = false
                    this.titleerrorannounce = 'Product Title is required'
                }
            },
            checkInputPrice() {
                if (this.price > 0) {
                    this.errorVar.price = false
                    this.validVar.price = true
                    this.priceerrorannounce = ''
                }
                else {
                    this.errorVar.price = true
                    this.validVar.price = false
                    if (!this.priceerrorannounce.length) {
                        this.priceerrorannounce = 'Price must be larger than 0'
                    }
                }
            },
            titleClassCheck() {
                if (this.errorVar.title == false && this.validVar.title == true) {
                    return { 'is-valid': true, 'is-invalid': false }
                }
                else if (this.errorVar.title == true && this.validVar.title == false) {
                    return { 'is-valid': false, 'is-invalid': true }
                }
                else return { 'is-valid': false, 'is-invalid': false }
            },
            priceClassCheck() {
                if (this.errorVar.price == false && this.validVar.price == true) {
                    return { 'is-valid': true, 'is-invalid': false }
                }
                else if (this.errorVar.price == true && this.validVar.price == false) {
                    return { 'is-valid': false, 'is-invalid': true }
                }
                else return { 'is-valid': false, 'is-invalid': false }
            },
            subtitleClassCheck() {
                if (this.subtitle.length > 8) { return { 'is-valid': true } }
                
            },
            haddleClickUploadImg() {
                this.$refs.changethis.click()
            },
            addtag(){
                if(this.tag){
                this.tags.push(this.tag)
                this.tag = null}
            }

        },
        computed: {
        }

    
        

    })
