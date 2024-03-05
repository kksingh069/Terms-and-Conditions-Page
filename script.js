function toggleBorder(element) {
    var leftContainer = element.closest('.left-container');
    
    // Remove border from all headers
    var allHeaders = leftContainer.querySelectorAll('h5, h6');
    allHeaders.forEach(function(header) {
        header.classList.remove('border-selected');
    });
    
    // Add border to the clicked header
    element.classList.add('border-selected');
}

function scrollToContent(id) {
    var element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var privacyHeaders = document.querySelectorAll('.privacy h5, .privacy h6');
    privacyHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            var targetId = this.getAttribute('data-bs-target').substring(1);
            scrollToContent(targetId);
            toggleBorder(this);
        });
    });
});
