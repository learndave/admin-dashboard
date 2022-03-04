function selectTag() {
    const sidebarMenuItem = Array.from(document.querySelectorAll(".menu-item"));

    function highlight(e) {


        for (item of sidebarMenuItem) {
            if (item.classList.contains("selected")) {
                item.classList.remove("selected");
            }
        }

        this.classList.add("selected");
        console.log(e);
    }

    for (item of sidebarMenuItem) {
        item.addEventListener("click", highlight);
    }
}

selectTag();