import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe('pk_test_dL50JAJksjPJmzcuBb7YMviX00WxWgn559');

export const bookTour = async tourId => {
  try {
    // 1) get check out session from the server
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/booking/checkout-session/${tourId}`
    );

    // 2) create checkout form + charge credit card

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
