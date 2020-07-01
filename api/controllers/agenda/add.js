module.exports = {


  friendlyName: 'Add',


  description: 'Add agenda.',


  inputs: {
    name:{
      type: 'string'
    },
    phone:{
      type: 'string'
    },
    emailAddress:{
      type: 'string'
    },
  },


  exits: {
    success:{
      responseType: 'ok'
    },
    notFound:{
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {
  
    var contact = await Contacts.create({...inputs}).fetch()

    // All done.
    return exits.success(contact);

  }


};
