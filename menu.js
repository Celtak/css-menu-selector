function navigation(id, classe) {

        element = document.getElementById(id);

        element.className = classe;

        if (element.nextElementSibling !== null) element.nextElementSibling.className = "";

        if (element.previousElementSibling !== null) element.previousElementSibling.className = "";

    }
