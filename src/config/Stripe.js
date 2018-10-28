let Stripe ={
    'keys': {
        'test':{
            'public':'', // Enter Stripe Details Here
        },
        'live':{
            'public':'', // Enter Stripe Details Here
        },
    },
    'plans':[
        {
            'plan_id': 'website_basic',
            'name': 'Basic Plan',
            'price': '$20.00',
            'frequency': 'monthly'
        },
        {
            'plan_id': 'website_premium',
            'name': 'Premium Plan',
            'price': '$50.00',
            'frequency': 'monthly'
        },
        {
            'plan_id': 'website_ultimate',
            'name': 'Ultimate Plan',
            'price': '$119.00',
            'frequency': 'monthly'
        }

    ]

};

Stripe.public = Stripe.keys.test.public;

export default Stripe;
