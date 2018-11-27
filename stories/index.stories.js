/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';
import Welcome from './Welcome';

import Header from './Header';
import Chat from './Chat';
import UserInput from './UserInput';
import MessageBubble from './MessageBubble';
import ProductsCarousel from './ProductsCarousel';
import Dialog from './Dialog';
import Cart from './Cart';

storiesOf('Black Fuseday 2k18', module)
.add('Header', () => ({
  components: { Header },
  template: '<header>Header</header>'
}))
.add('Chat', () => ({
  components: { Header },
  template: '<header>Chat</header>'
}))
.add('UserInput', () => ({
  components: { Header },
  template: '<header>UserInput</header>'
}))
.add('Chat Message Bubble', () => ({
  components: { Header },
  template: '<header>Message Bubble</header>'
}))
.add('Products Carousel', () => ({
  components: { Header },
  template: '<header>Products</header>'
}))
.add('Dialog', () => ({
  components: { Header },
  template: '<header>Dialog</header>'
}))
.add('Cart', () => ({
  components: { Header },
  template: '<header>Cart</header>'
}));

// left here for reference
storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));

/* eslint-enable react/react-in-jsx-scope */
