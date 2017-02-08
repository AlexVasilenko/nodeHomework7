'use strict';

function postAction(req, res) {
  res.status(200).json({ duplicate: !req.params.syncfile });
}

module.exports = {
  postAction: postAction
};
