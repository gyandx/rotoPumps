import { environment } from './environments/environment';

var stripe = Stripe(environment.stripeKey); // use your test publishable key
var elements = stripe.elements();
