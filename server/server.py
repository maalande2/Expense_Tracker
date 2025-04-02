from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/test")
def test():
    data = [
        {
            "date" : "April 2, 2025",
            "price" : 20.00,
            "category" : "Food"
        },
        {
            "date" : "March 31, 2025",
            "price" : 1300.00,
            "category" : "Rent"
        },
        {
            "date" : "March 18, 2025",
            "price" : 15.00,
            "category" : "Subscriptions"
        },

    ]
    return jsonify(items=data)

if __name__ == "__main__":
    app.run(debug=True)
