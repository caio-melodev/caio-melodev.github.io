📦 CEP Search Engine

A web application to search for Brazilian postal codes (CEPs) and retrieve address information using the ViaCEP API.

🚀 Features

    🔎 Search for address information by entering a Brazilian CEP.

    📍 Displays detailed address data including street, neighborhood, city, state, and more.

    💡 User-friendly interface with responsive design.

🛠️ Technologies Used

    HTML5

    CSS3 (Tailwind CSS, Boxicons)

    JavaScript (Fetch API)

📥 Installation

# Clone the repository
git clone https://github.com/caio-melodev/cepsearch.git

# Navigate to the project folder
cd cepsearch

Then open index.html in your web browser.
📌 Usage

    Open the application in your browser.

    Enter a valid 8-digit Brazilian CEP in the input field (e.g., 12345678 or 12345-678).

    Click the Buscar button.

    The address information will be displayed below.

⚙️ How It Works

    The user inputs a CEP in the form.

    The JavaScript function searchCEP is triggered on button click.

    The CEP is sanitized by removing non-digit characters.

    A GET request is sent to the ViaCEP API with the cleaned CEP.

    The response is parsed, and the address information is displayed in the UI.

🤝 Contributing

Contributions are welcome!
Please fork the repository and submit a pull request with your improvements.

👨‍💻 Author

caio-melodev
Erickhrs