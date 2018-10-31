const express = require('express');
const router = express.Router();
const request = require('request')
const stringSimilarity = require('string-similarity');

function findSimilarity (a , b) {
    return stringSimilarity.compareTwoStrings(a.toString(), b.toString());
}

router.get('/people-like-you', function(req, res) {
    //downloading json data from web
    const options = {
        url: 'https://www.jasonbase.com/things/Y0pJ'
    }
    request.get(options, function(err, resp, body){
        const data = JSON.parse(body)
        var return_data = []
        //check the similarity
        if(Object.keys(req.query).length === 0){
            res.json({ peopleLikeYou: data });
        } else{
            data.forEach(function(element) {
                var score = 0
                var divider = 1;
                if(req.query.name){
                    score += findSimilarity(element.name, req.query.name)
                    divider++
                }
                if(req.query.age){
                    score += findSimilarity(element.age, req.query.age)
                    divider++
                }
                if(req.query.latitude){
                    score += findSimilarity(element.latitude, req.query.latitude)
                    divider++
                }
                if(req.query.longitude){
                    score += findSimilarity(element.longitude, req.query.longitude)
                    divider++
                }
                if(req.query.monthlyIncome){
                    score += findSimilarity(element.monthlyIncome, req.query.monthlyIncome)
                    divider++
                }
                if(req.query.experienced){
                    score += findSimilarity(element.experienced, req.query.experienced)
                    divider++
                }
                element["Score"] = (score/divider).toFixed(2);
                if(score/divider > 0){
                    return_data.push(element)
                }
            });
            //sort the data out
            return_data.sort(function(a, b) {
                return b.Score - a.Score;
            });
            res.json({ peopleLikeYou: return_data.slice(0,10) });
        }
    })
});



module.exports = router;