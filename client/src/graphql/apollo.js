import Vue from "vue";
import { ApolloClient }  from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import VueApollo from "vue-apollo";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path}) => {
            const errMessage = `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`;
            console.log(errMessage);
        });
    }
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new createHttpLink({
    uri: process.env.APP_GRAPHQL_ROOT_URI || "http://localhost:3000/graphql",
});

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});

Vue.use(VueApollo);