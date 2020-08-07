
    var newVue = new Vue({
        el: '#app',
        data: {
            animated: false,
            items: [
                {
                    id: 0,
                    title: 'Gothic Video game',
                    subtitle: 'Awesome game',
                    price: 10000,
                    srcimg: './img/img1.png',
                },
                {
                    id: 1,
                    title: 'World of warcraft Video Game',
                    subtitle: 'Also better than Vannila',
                    price: 2000,
                    srcimg: './img/img2.png',
                },
                {
                    id: 2,
                    title: 'Call of Duty Video Game',
                    subtitle: 'it is Okay, i guess',
                    price: 500,
                    srcimg: './img/img3.png',
                },
                {
                    id: 4,
                    title: 'Legends of League',
                    subtitle: 'The best Video game ever',
                    price: 10,
                    srcimg: './img/img4.png',
                },
                {
                    id: 5,
                    title: 'Dark Soul',
                    subtitle: 'it is Okay, i guess',
                    price: 20,
                    srcimg: './img/img5.png',
                },
                {
                    id: 6,
                    title: 'Maria Soul ',
                    subtitle: 'it is Okay, i guess',
                    price: 90211,
                    srcimg: './img/img6.png',
                },
                {
                    id: 7,
                    title: 'Graji on the mic',
                    subtitle: 'The best Video game ever',
                    price: 10,
                    srcimg: './img/img4.png',
                },
                {
                    id: 8,
                    title: 'quenty mali onru ',
                    subtitle: 'it is Okay, i guess',
                    price: 20,
                    srcimg: './img/img5.png',
                },
                {
                    id: 9,
                    title: 'Andy shop ',
                    subtitle: 'it is Okay, i guess',
                    price: 90211,
                    srcimg: './img/img6.png',
                }
            ],
            yourCart: [],
            yourCartTotal: 0,
            yourItemNumber: 0,
            search: '',
        },
        methods: {
            addToCardfunc(index) {
                this.animated = true
                this.yourItemNumber += 1
                if (this.yourCart === undefined || this.yourCart.length == 0) {
                    this.yourCart.push({
                        obj: this.items[index],
                        quantity: 1
                    })
                }
                else {
                    if (!(this.yourCart.some(item => {
                        return this.items[index].id == item.obj.id
                    }))) {
                        this.yourCart.push({
                            obj: this.items[index],
                            quantity: 1
                        })
                    }
                    else {
                        this.yourCart.forEach(item => {
                            if (this.items[index].id == item.obj.id)
                                item.quantity += 1
                        })
                    }
                }
            },
            removeFromCardfunc(index) {
                this.yourCart.forEach((item, ind) => {
                    if (this.items[index].id == item.obj.id) {
                        this.yourItemNumber -= item.quantity
                        this.yourCart.splice(ind, 1)
                        // console.log("ok")
                    }
                })
                this.items.splice(index, 1)
            },
            priceFormat(pri) {
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(pri);
            },
            parentFunc(data) {
                this.items.unshift(data)
            },
            cartUp(index) {
                return this.yourCart[index].quantity++, this.yourItemNumber++
            },
            cartDown(index) {
                if (this.yourCart[index].quantity > 1)
                    return this.yourCart[index].quantity--, this.yourItemNumber--
            },
            cartRemove(index) {
                this.yourItemNumber -= this.yourCart[index].quantity
                this.yourCart.splice(index, 1)
            }

        },
        computed: {
            yourCartTotalComputed() {
                var sum = 0
                this.yourCart.forEach(x => {
                    sum += (x.obj.price * x.quantity)
                })
                return this.yourCartTotal = sum
            },
            filteredList() {
                return this.items.filter(post => {
                    return post.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    })
