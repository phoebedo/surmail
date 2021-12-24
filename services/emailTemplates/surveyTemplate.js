const keys = require("../../config/key");
module.exports = (survey) => {
  return `
        <html>
            <body>
            <div style="text-align: center;">

            <h3>We'd love to hear from you</h3>
            <p>Your feebacks help us improve our service</p>
            <p>${survey.body}</p>
            <div>
                <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">YES</a>
                
            </div>
            <div>
                <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">NO</a>
            </div>

            </div> 
            </body>
        </html>
    `;
};
