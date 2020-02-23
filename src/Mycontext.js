import React from "react";

const MyContext = React.createContext();

const DaDaPovider = MyContext.Provider;//prodiver
const PutiConsumer = MyContext.Consumer; // receiver

export {DaDaPovider, PutiConsumer}