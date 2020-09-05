Vue.component('slidebar', {
    template: `
    <div>
    
    <div class="sidewap">
    <div  class="sidebar-header" id="sidebarCollapse">
        <div class="d-flex align-items-center " >
            <svg  width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-grid-fill mr-3"
                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
            </svg>
            <h5 class="d-inline my-0">Sidebar</h5>
        </div>
    </div>

    <nav id="sidebar">
    <ul class="list-unstyled components">
        <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                class="dropdown-toggle dropdown-togglex">
                <span class="mr-2">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-layers-fill"
                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z" />
                        <path fill-rule="evenodd"
                            d="M2.125 8.567l-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z" />
                    </svg>
                </span>
                nothing</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <li>
                    <a href="#">Home 1</a>
                </li>
                <li>
                    <a href="#">Home 2</a>
                </li>
                <li>
                    <a href="#">Home 3</a>
                </li>
                <li>
                    <a href="#">Home 3</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#"><span class="mr-2">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-diamond-fill"
                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.615L8 8.707l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.615-.707L7.293 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z" />
                    </svg>
                </span>Nothing</a>
        </li>
        <li>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                class="dropdown-toggle dropdown-togglex">
                <span class="mr-2">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-diamond-fill"
                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.615L8 8.707l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.615-.707L7.293 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z" />
                    </svg>
                </span>
                Tags</a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
                <li>
                    <a href="#">UI/UX</a>
                </li>
                <li>
                    <a href="#">Front end Coding</a>
                </li>
                

                <li>
                    <a href="#">Page 3</a>
                </li>
                
            </ul>
        </li>
        <li>

        </li>

    </ul>
</nav>
</div>
    
</div>`,
    props: {
        
    },
    beforeCreate() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    }
})