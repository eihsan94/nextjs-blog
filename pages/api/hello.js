// you can test this api by going to http://localhost:3000/api/hello
export default (req, res) => {
    res.status(200).json({ text: 'Hello' })
}