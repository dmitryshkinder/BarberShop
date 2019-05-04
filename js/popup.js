        var link = document.querySelector(".login-link");
        var popup = document.querySelector(".modal-login");
        var map_popup = document.querySelector(".modal-map");
        var contacts_map = document.querySelector(".contacts-button-map");
        var footer_map = document.querySelector(".footer-map");
        var popup_close = document.querySelector(".modal-close");
        var map_close = map_popup.querySelector(".modal-close");
        var login = popup.querySelector("[name=login]");
        var form = popup.querySelector("form");
        var password = popup.querySelector("[name=password]");
        var storage = localStorage.getItem("login");

        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
            if (storage) {
                login.value = storage;
                password.focus();
            } else {
                login.focus();
            }
        });

        popup_close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        });

        form.addEventListener("submit", function (evt) {
            if (!login.value || !password.value) {
                evt.preventDefault();
//                popup.classList.remove("modal-error");
                popup.offsetWidth = popup.offsetWidth;
                popup.classList.add("modal-error");
                console.log("Форма трясётся");
            } else {
                if (isStorageSupport) {
                    localStorage.setItem("login", login.value);
                }
            } 
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                if (popup.classList.contains("modal-show")) {
                    evt.preventDefault();
                    popup.classList.remove("modal-show");
                    popup.classList.remove("modal-error");
                }
            }
        });

        contacts_map.addEventListener("click", function (evt) {
            evt.preventDefault();
            map_popup.classList.add("modal-map-show");
        });

        map_close.addEventListener("click", function (evt) {
            evt.preventDefault();
            map_popup.classList.remove("modal-map-show");
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                if (map_popup.classList.contains("modal-map-show")) {
                    evt.preventDefault();
                    map_popup.classList.remove("modal-map-show");
                }
            }
        });

        footer_map.addEventListener("click", function (evt) {
            evt.preventDefault();
            map_popup.classList.add("modal-map-show");
        });
