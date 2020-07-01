module.exports = {


  friendlyName: 'Update',


  description: 'Update agenda.',


  inputs: {
    id:{
      type: 'string'
    },
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


  fn: async function ({id, ...inputs}, exits) {
    var contacts = await Contacts.update({id}).set(inputs);

    // All done.
    return exits.success(contacts);

  }


};
