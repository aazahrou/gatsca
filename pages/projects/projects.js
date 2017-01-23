import ScapholdLogo from '../images/scaphold-logo.png';
import AngularApollo from '../images/projects/angular-apollo.png';
import ReactApollo from '../images/projects/react-apollo.png';
import ReactRelay from '../images/projects/react-relay.png';
import Slackr from '../images/projects/slack-graphql.png';
import YCGraphQL from '../images/projects/yc-graphql.png';
import GraphQLScaphold from '../images/projects/graphql-scaphold.png';
import Zeit from '../images/projects/zeit.png';
import ReactVue2 from '../images/projects/react-vue2.png';
import Vue2Apollo from '../images/projects/vue2-apollo.png';
import ReactVue2Apollo from '../images/projects/react-vue2-apollo.png';
import MailchimpWebtask from '../images/projects/mailchimp-webtask.png';
import CerebralGraphQL from '../images/projects/cerebral-graphql.png';
import GearVRCardboard from '../images/projects/gearvr-googlecardboard.png';
import ReactReduxApollo from '../images/projects/react-redux-apollo.png';

export default [
  {
    title: 'Cerebral TodoMVC',
    author: 'Wayne Frazer',
    url: 'https://github.com/bannerintheUK/Cerebral-Scaphold-TodoMVC',
    description: 'A Cerebral GraphQL TodoMVC',
    img: CerebralGraphQL,
  },
  {
    title: 'React Virtual Reality',
    author: 'Scaphold.io',
    url: 'https://github.com/scaphold-io/react-vr-graphql',
    description: 'A starter kit to help you create awesome VR applications with React Native and GraphQL!',
    img: GearVRCardboard,
  },
  {
    title: 'React + Apollo',
    author: 'Scaphold.io',
    url: 'https://github.com/scaphold-io/react-apollo-starter-kit',
    description: 'Scaphold.io\'s Starter Kit for building React-Apollo apps https://scaphold.io',
    img: ReactApollo || ScapholdLogo,
  },
  {
    title: 'React + Relay',
    author: 'Scaphold.io',
    url: 'https://github.com/scaphold-io/react-relay-starter-kit',
    description: 'Scaphold.io\'s Starter Kit for building React-Relay apps https://scaphold.io',
    img: ReactRelay || ScapholdLogo,
  },
  {
    title: 'Angular2 + Apollo',
    author: 'Scaphold.io',
    url: 'https://github.com/scaphold-io/angular2-apollo-client-webpack-starter',
    description: 'A graphql ready starter kit for Angular2 using Apollo Client and Webpack. This starter kit is built to seamlessly integrate with the scaphold.io\'s powerful GraphQL-as-a-Service platform. https://scaphold.io',
    img: AngularApollo || ScapholdLogo,
  },
  {
    title: 'Custom Business Logic',
    author: 'Scaphold.io',
    url: 'https://github.com/scaphold-io/scaphold-business-logic-examples',
    description: 'This repository holds examples of microservices that can instantly be used with Scaphold Logic. Over time we will be building up this repository to include examples of microservices built on a variety of cloud providers and use cases.',
    img: MailchimpWebtask || ScapholdLogo,
  },
  {
    title: 'React + Vue2 + Apollo',
    author: 'kristianmandrup',
    url: 'https://github.com/kristianmandrup/react-vue2-apollo-starter-kit',
    description: 'Apollo starter kit for React and Vue2 with GraphQL for scaphold.io',
    img: ReactVue2Apollo || ScapholdLogo,
  },
  {
    title: 'zei-sca-git',
    author: 'martinheidegger',
    url: 'https://github.com/martinheidegger/zei-sca-git',
    description: 'A little tutorial to learn zeit/now, scaphold and github api.',
    img: Zeit || ScapholdLogo,
  },
  {
    title: 'Slackr GraphQL Subscriptions',
    author: 'Scaphold.io',
    url: 'https://github.com/scaphold-io/slackr-graphql-subscriptions-starter-kit',
    description: 'A realtime React starter kit powered by GraphQL Subscriptions. The app is a slack clone and features real-time messaging and social authentication.',
    img: Slackr || ScapholdLogo,
  },
  {
    title: 'React + Vue2',
    author: 'mandricore',
    url: 'https://github.com/mandricore/react-vue2-apollo',
    description: 'React and Vue2 starter kit for Apollo GraphQL via scaphold.io',
    img: ReactVue2 || ScapholdLogo,
  },
  {
    title: 'Scaphold Contrib Statics',
    author: 'Erwan DATIN (MacKentoch)',
    url: 'https://github.com/MacKentoch/scaphold-contrib-statics',
    description: 'Scaphold statics assets (print screen, piece of code...)',
    img: GraphQLScaphold || ScapholdLogo,
  },
  {
    title: 'HackerNews Tutorial',
    author: 'Scaphold.io',
    url: 'https://github.com/scaphold-io/hacker-news-tutorial',
    description: 'Scaphold.io\'s HackerNews Tutorial built with React and Relay https://scaphold.io',
    img: YCGraphQL || ScapholdLogo,
  },
  {
    title: 'Vue2 + Apollo',
    author: 'kristianmandrup',
    url: 'https://github.com/kristianmandrup/vue2-apollo-scaphold',
    description: 'Vue2 Apollo Scaphold starter app',
    img: Vue2Apollo || ScapholdLogo,
  },
  {
    title: 'Save The World Tutorial',
    author: 'Scaphold.io',
    url: 'https://github.com/scaphold-io/save-the-world-tutorial',
    description: 'Learn how to build real applications with Angular2, GraphQL, and Scaphold.io',
    img: AngularApollo || ScapholdLogo,
  },
  {
    title: 'GraphQL Subscriptions',
    author: 'Scaphold.io',
    url: 'https://github.com/scaphold-io/graphql-subscriptions-realtime-starter-kit',
    description: 'Scaphold.io\'s Starter Kit for building real-time apps with GraphQL Subscriptions',
    img: GraphQLScaphold || ScapholdLogo,
  },
  {
    title: 'react-redux-graphql-apollo-bootstrap-webpack-starter',
    author: 'Erwan DATIN (MacKentoch)',
    url: 'https://github.com/MacKentoch/react-redux-graphql-apollo-bootstrap-webpack-starter',
    description: 'React + React-Router + Redux + GraphQL + Apollo +Bootstrap STARTER (with user authentication)',
    img: ReactReduxApollo || ScapholdLogo,
  },
];
