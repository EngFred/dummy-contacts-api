const notFound = (req, res, next) => {
    const error = new Error('Not Found!');
    res.status(404).json({ message: error.message });
  };

export default notFound