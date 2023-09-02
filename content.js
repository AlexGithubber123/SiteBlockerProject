const generateHTML = (pageName) => {
    return `<body>
        <h1>This Site is Blocked</h1>
        <blockquote>
            <p>“He who cannot obey himself will be commanded; that is the nature of living creatures.”</p>
            <footer>- Friedrich Nietzsche</footer>
        </blockquote>
    </body>`;
};

const generateSTYLING = () => {
    return `body {
        background-image: url('D:/coding/block site/images/dope.jpg'); 
        background-size: cover; 
        background-repeat: no-repeat; 
        background-attachment: fixed; 
        text-align: center;
        color: white;
    }
    
    body h1{
        padding: 3%;
        font-size: x-large;
        font-weight: bold;
    }

    blockquote {
        margin-top: 13%;
        padding-left: 30%;
        padding-right: 22%;
    }
    
    blockquote p {
        font-size: x-large;
        font-style: italic;
    }
    
    blockquote footer {
        font-size: large;
        padding-top: 2%;
        padding-left: 65%;
    }`;
};

// Check the current website's hostname
const hostname = window.location.hostname;

// List of blocked websites
const blockedWebsites = ["www.reddit.com", "www.facebook.com"]; // Add more as needed

if (blockedWebsites.includes(hostname)) {
    // Apply custom styling
    const styleElement = document.createElement("style");
    styleElement.textContent = generateSTYLING();
    document.head.appendChild(styleElement);

    // Replace the page content with the blocked message
    document.body.innerHTML = generateHTML(hostname);
}
