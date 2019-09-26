const formResponse = {
	success : (res, status, response, data) => {
		const success = {
			status : status,
			data : data,
			response : response
		}
		res.json(success)
	},
	response: (res, result, status, error) => {
        let resultPrint = {}
        // bikin object resultPrint punya isi sebagai berikut
        resultPrint.error = error || null
        resultPrint.status_code = status || 200
        resultPrint.result = result

        return res.status(resultPrint.status_code).json(resultPrint)
    },
}


module.exports = formResponse
