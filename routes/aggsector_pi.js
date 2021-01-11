const router = require('express').Router();
let aggrid_pi = require('../models/aggsector_pi.model');


router.route('/materials').get((req, res) => {
    aggrid_pi['materials_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/consumer_staples').get((req, res) => {
    aggrid_pi['consumer_staples_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/consumer_discretionary').get((req, res) => {
    aggrid_pi['consumer_discretionary_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/energy').get((req, res) => {
    aggrid_pi['energy_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/financials').get((req, res) => {
    aggrid_pi['financials_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/health_care').get((req, res) => {
    aggrid_pi['health_care_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/industrials').get((req, res) => {
    aggrid_pi['industrials_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/real_estate').get((req, res) => {
    aggrid_pi['real_estate_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/information_technology').get((req, res) => {
    aggrid_pi['information_technology_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/communication_services').get((req, res) => {
    aggrid_pi['communication_services_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/utilities').get((req, res) => {
    aggrid_pi['utilities_chart'].find().lean()
        .then(aggrid_pi => res.json(aggrid_pi))
        .catch(err => res.status(400).json('Error: ' + err));});

router.route('/universe').get((req, res) => {
            aggrid_pi['universe_chart'].find().lean()
                .then(aggrid_pi => res.json(aggrid_pi))
                .catch(err => res.status(400).json('Error: ' + err));});

router.route('/spycfg').get((req, res) => {
            aggrid_pi['spy_chartcfg'].find().lean()
                    .then(aggrid_pi => res.json(aggrid_pi))
                    .catch(err => res.status(400).json('Error: ' + err));});

router.route('/qqqcfg').get((req, res) => {
            aggrid_pi['qqq_chartcfg'].find().lean()
                   .then(aggrid_pi => res.json(aggrid_pi))
                   .catch(err => res.status(400).json('Error: ' + err));});

router.route('/iwmcfg').get((req, res) => {
            aggrid_pi['iwm_chartcfg'].find().lean()
                    .then(aggrid_pi => res.json(aggrid_pi))
                    .catch(err => res.status(400).json('Error: ' + err));});

router.route('/interactivemediaentertainment').get((req, res) => {aggrid_pi['interactivemediaentertainment'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/telecom').get((req, res) => {aggrid_pi['telecom'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/mediaentertainment').get((req, res) => {aggrid_pi['mediaentertainment'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/apparelluxurygoods').get((req, res) => {aggrid_pi['apparelluxurygoods'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/automobile').get((req, res) => {aggrid_pi['automobile'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/hotelrestaurantleisure').get((req, res) => {aggrid_pi['hotelrestaurantleisure'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/householddurables').get((req, res) => {aggrid_pi['householddurables'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/internetdirectmarketing').get((req, res) => {aggrid_pi['internetdirectmarketing'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/leisuregoods').get((req, res) => {aggrid_pi['leisuregoods'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/retail').get((req, res) => {aggrid_pi['retail'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/foodbeveragetobacco').get((req, res) => {aggrid_pi['foodbeveragetobacco'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/foodstaplesretailing').get((req, res) => {aggrid_pi['foodstaplesretailing'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/householdpersonalproducts').get((req, res) => {aggrid_pi['householdpersonalproducts'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/oilgasconsumablefuels').get((req, res) => {aggrid_pi['oilgasconsumablefuels'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/oilgasequipmentservices').get((req, res) => {aggrid_pi['oilgasequipmentservices'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/oilgasexplorationproduction').get((req, res) => {aggrid_pi['oilgasexplorationproduction'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/oilgasstoragetransportation').get((req, res) => {aggrid_pi['oilgasstoragetransportation'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/banks').get((req, res) => {aggrid_pi['banks'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/brokeragecapitalmarkets').get((req, res) => {aggrid_pi['brokeragecapitalmarkets'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/diversifiedfinancialcreditservices').get((req, res) => {aggrid_pi['diversifiedfinancialcreditservices'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/insurance').get((req, res) => {aggrid_pi['insurance'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/regionalbanks').get((req, res) => {aggrid_pi['regionalbanks'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/thriftsmortgagefinance').get((req, res) => {aggrid_pi['thriftsmortgagefinance'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/biotechnology').get((req, res) => {aggrid_pi['biotechnology'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/healthcareservices').get((req, res) => {aggrid_pi['healthcareservices'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/medicalequipmentdevicessupplies').get((req, res) => {aggrid_pi['medicalequipmentdevicessupplies'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/pharmaceuticals').get((req, res) => {aggrid_pi['pharmaceuticals'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/aerospacedefense').get((req, res) => {aggrid_pi['aerospacedefense'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/commercialprofessionalservices').get((req, res) => {aggrid_pi['commercialprofessionalservices'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/constructionmaterials').get((req, res) => {aggrid_pi['constructionmaterials'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/industrialgoods').get((req, res) => {aggrid_pi['industrialgoods'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/machinery').get((req, res) => {aggrid_pi['machinery'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/transportation').get((req, res) => {aggrid_pi['transportation'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/hardwareequipment').get((req, res) => {aggrid_pi['hardwareequipment'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/itservices').get((req, res) => {aggrid_pi['itservices'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/semiconductors').get((req, res) => {aggrid_pi['semiconductors'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/software').get((req, res) => {aggrid_pi['software'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/basicmaterials').get((req, res) => {aggrid_pi['basicmaterials'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/industrialmetals').get((req, res) => {aggrid_pi['industrialmetals'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/preciousmetals').get((req, res) => {aggrid_pi['preciousmetals'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/commercialreits').get((req, res) => {aggrid_pi['commercialreits'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/realestateservices').get((req, res) => {aggrid_pi['realestateservices'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/residentialmortgages').get((req, res) => {aggrid_pi['residentialmortgages'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/retailreits').get((req, res) => {aggrid_pi['retailreits'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/electric').get((req, res) => {aggrid_pi['electric'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/gas').get((req, res) => {aggrid_pi['gas'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/independentpowerrenewables').get((req, res) => {aggrid_pi['independentpowerrenewables'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/multilineutilities').get((req, res) => {aggrid_pi['multilineutilities'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});
router.route('/water').get((req, res) => {aggrid_pi['water'].find().lean().then(aggrid_pi =>res.json(aggrid_pi)).catch(err => res.status(400).json('Error: ' + err));});


module.exports = router;
