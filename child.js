
    var helloworld = Vue.component('helloworld', {
        template: "#ModalChild",
        data() {
            return {
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
                titleErrorAnnounce: '',
                priceErrorAnnounce: '',
            }
        },
        methods: {
            uploadFile() {
                this.file = document.querySelector('input[type=file]').files[0];
            },
            childfunc() {
                this.titleErrorAnnounce = ''
                this.priceErrorAnnounce = ''
                if (!this.title) {
                    this.errorVar.title = true
                    this.titleErrorAnnounce = 'Oh no, Product Title is required'
                }
                if (this.price == 0 || this.price < 0) {
                    this.errorVar.price = true
                    this.priceErrorAnnounce = 'Hey, Product Price must be larger than 0'
                }
                if (this.price > 0 && this.title.length > 0) {
                    this.$emit('childevent', {
                        id: Math.random(),
                        title: this.title,
                        subtitle: this.subtitle,
                        price: this.price,
                        srcimg: URL.createObjectURL(this.file)
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
                    this.titleErrorAnnounce = ''
                }
                else {
                    this.errorVar.title = true
                    this.validVar.title = false
                    this.titleErrorAnnounce = 'Product Title is required'
                }
            },
            checkInputPrice() {
                if (this.price > 0) {
                    this.errorVar.price = false
                    this.validVar.price = true
                    this.priceErrorAnnounce = ''
                }
                else {
                    this.errorVar.price = true
                    this.validVar.price = false
                    if (!this.priceErrorAnnounce.length) {
                        this.priceErrorAnnounce = 'Price must be larger than 0'
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
            }
        },
        computed: {
        }

    })
