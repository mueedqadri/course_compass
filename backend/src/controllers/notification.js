//Created by Mueed Qadri
var notificationController = {};

notificationController.AllNotification = function (req, res) {
  let sql = `SELECT * FROM notification  WHERE endDate > CURDATE();`;
  db.query(sql, (err, notifications) =>{
    try {
        if (!notifications || !notifications.length) {
          res.status(404).json({
            message: "No new notifications",
            success: false,
          });
        } else {
          res.status(200).json({
            message: "Notifications Found",
            success: true,
            data: notifications,
          });
        }
      } catch (ex) {
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }
  });
};

module.exports = notificationController;