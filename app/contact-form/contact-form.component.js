(function() {
    'use strict';

    angular
        .module('contactsApp')
        .component('contactForm', {
            templateUrl: 'contact-form/contact-form.template.html',
            controller: ContactFormController,
            controllerAs: 'vmContactForm'
        });

    function ContactFormController() {
      var vm = this;
      vm.onSubmit = onSubmit;
      vm.model = {}
      vm.options = {};

      vm.fields = [
        {
          key: 'firstName',
          type: 'input',
          templateOptions: {
            label: 'First Name',
            placeholder: 'First Name',
            maxlength: '15',
            required: true
          }
        },
        {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            label: 'Last Name',
            placeholder: 'Last Name',
            maxlength: '15',
            required: true
          }
        },
        {
          key: 'dateOfBirth',
          type: 'datepicker',
          templateOptions: {
            label: 'Date of Birth',
            datepickerPopup: 'dd-MMMM-yyyy',
            type: 'date',
            required: true
          }
        },
        {
          key: 'phoneNumber',
          type: 'input',
          templateOptions: {
            label: 'Phone Number',
            placeholder: 'Phone Number',
            type: 'number',
            maxlength: '9',
            required: true
          }
        },
        {
          key: 'gender',
          type: 'radioType',
          templateOptions: {
            label: "Gender",
            options: [
                {name: "Male", value: 'm'},
                {name: "Female", value: 'f'}
            ],
            required: true
          }
        },
        {
          key: 'relationship',
          type: 'select',
          templateOptions: {
            label: 'Relationship',
            options: [
                {name: "Home", value: 'home'},
                {name: "Work", value: 'work'},
                {name: "Other", value: 'other'},
            ],
            required: true
          }
        },
        {
          key: 'description',
          type: 'textarea',
          templateOptions: {
            label: 'Description',
            rows: 10
          }
        }
      ];

      function onSubmit() {
        console.log("hi");
      }
    }
})();