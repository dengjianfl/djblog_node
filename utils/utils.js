module.exports = {
    handlerResponse: function ({isSuccess=true, message=null, data=null}) {
        if (data) {
            return {
                isSuccess,
                message,
                data
            }
        } else {
            return {
                isSuccess,
                message
            }
        }
        
    }
}