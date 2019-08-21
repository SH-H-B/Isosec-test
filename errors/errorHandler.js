exports.handle404 = (err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).send({ msg: err.msg });
  } else {
    next(err);
  }
};

exports.handle405 = (req, res, next) => {
  res.status(405).send({ msg: "Method Not Allowed" });
};
exports.handle500 = (req, res, next) => {
  res.status(500).send({ msg: res.body.message });
};
