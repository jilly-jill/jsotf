  
    function removeCard(elementid) {
        const element = document.getElementById(elementid);
        element.parentNode.removeChild(element);
    }

    export default removeCard();
    