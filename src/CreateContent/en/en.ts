export default {
  language: 'en',
  boolean: true,
  welcome: 'Welcome to my website',
  homeHeader: ['INTERIOR', 'DESIGN', 'WITH', 'IDENTITY'],
  projects: {
    title: 'Projects',
    content: [
      {
        header: 'Office Horw',
        src: 'https://meinhof.ch/src/zugeschnittenProject/titelHorw.jpg',
        path: 'OfficeHorw',
      },
      {
        header: 'Office Videolution',
        src: 'https://meinhof.ch/src/zugeschnittenProject/titelVideolution.jpg',
        path: 'OfficeVideolution',
      },
      {
        header: 'Puristic Bathroom',
        src: 'https://meinhof.ch/src/zugeschnittenProject/titelBadezimmer.jpg',
        path: 'PuristicBathroom',
      },
      {
        header: 'New Construction Studio',
        src: 'https://meinhof.ch/src/zugeschnittenProject/titelRoggwil.jpg',
        path: 'NewConstructionStudio',
      },
      {
        header: 'Lakefront Apartment',
        src: 'https://meinhof.ch/src/zugeschnittenProject/titelNeuenburg.jpg',
        path: 'LakefrontApartment',
      },
    ],
    id: 'projects',
  },
  offer: {
    title: 'Offer',
    content: [
      {
        title: 'Consultation',
        content:
          'Would you like to redesign rooms and need support? We are happy to advise you on interior design, color choice, room layout, and much more.',
      },
      {
        title: 'Concept',
        content:
          'Do you want a concrete design proposal for your interiors? We illustrate the redesign of your rooms through mood boards, visualizations (3D drawing), and plans.',
      },
      {
        title: 'Implementation',
        content:
          'Are you remodeling or redesigning and want to have your design concept implemented in detail? We accompany the project from the consultation through the concept, right up to the key handover!',
      },
    ],
    id: 'offer',
  },
  about: {
    title: 'About us',
    content:
      'We are Meinhof GmbH, an interior design office based in the canton of Lucerne. We advise, plan, and carry out renovation, furnishing, and redesign projects. With passion and great attention to detail, we realize your dream of new living space. We would be very happy to be contacted!',
    id: 'about',
  },
  customersAndClients: {
    title: 'Customers and Partners',
    content: [
      {
        name: 'Videolution',
        src: 'https://usercontent.one/wp/www.meinhof.ch/wp-content/uploads/2022/07/videolutions-logo_white.png?media=1653409358&quot',
        path: '',
      },
      {
        name: 'Schreinerei Meer',
        src: 'https://usercontent.one/wp/www.meinhof.ch/wp-content/uploads/2022/07/1477141671-e1658220760603.png?media=1653409358&quot',
        path: '',
      },
      {
        name: 'Zentrum Eichgut',
        src: 'https://meinhof.ch/src/logoPartner/healthManagementWeiss.png',
        path: '',
      },
    ],
    id: 'customersAndClients',
  },
  location: {
    title: 'Location',
    content: [
      {
        title: 'Address',
        content: ['Herr', 'Meinhof Julius', 'Tel: +41 78 971 50 31', 'E-Mail: julius@meinhof.ch'],
      },
      {
        title: 'Contact',
        content: ['Grisigenstrasse 12', '6048 Horw', 'Luzern', 'Schweiz (CH)'],
      },
    ],
    id: 'location',
  },

  projectSites: [
    {
      header: 'Office Horw',
      src: 'https://meinhof.ch/src/bueroHorw/bueroHorwTitelbildBlur.jpeg',
      path: 'small (0-50m2)',
      art: 'Furnishing',
      size: 'small (0-50m2)',
      concept: 'Office Jungle',
      ethos: 'Clear geometric shape, natural materials and colors, form follows function',
      requirements: [
        'Division into office/studio and meeting room',
        'Space for samples, materials, and machines',
        'Representative design for the meeting room',
        'Ergonomic requirements for the workplace',
        'Acoustic measures to dampen sound',
      ],
      content: [
        {
          text: `The composition of colors and materials is based on natural colors. 
          The goal is to bring something plant-like into the interior with materials,
          such as the wallpaper, without using plants. The general color scheme is set
          to be rather dark since there are already many light surfaces in the interior
           that won't be painted over. The introduced textiles serve, among other things,
           for acoustics which dampen the room sound.`,
          src: 'https://meinhof.ch/src/bueroHorw/bueroHorwMoodbord.jpg',
        },
        {
          text: `For the meeting room, the goal was to show as many variations of the 
          design elaboration as possible. For this, custom furniture (table, sideboard,
            barista corner, wall shelves, etc.), designer pieces (chairs, desk lamp, wallpaper, etc.),
            and very basic furnishings and accessories from well-known furniture stores
            (cups, vase, carpets, etc.) were used. The aim was not to show the optimum
            or the perfect series, but to make as many differences in detail visible.`,
          src: 'https://meinhof.ch/src/bueroHorw/bueroHorwV02.jpg',
          src2: 'https://meinhof.ch/src/bueroHorw/bueroHorwV01.jpg',
        },
        {
          text: `In the studio and office space, function and ergonomics are paramount. 
          There is a high need for storage space for books and samples as well as various
          equipment. The desk is continuously height-adjustable to allow working in different
          positions. The materials should have a clear connection to the meeting room and
          complement the material concept.`,
          src: 'https://meinhof.ch/src/bueroHorw/bueroHorwB02.jpg',
          src2: 'https://meinhof.ch/src/bueroHorw/bueroHorwB01.jpg',
        },
      ],
    },

    // Achtung hat gleichen content wie bueroHorw!!!!!!!!!!!
    {
      header: 'Office Videolution',
      src: 'https://meinhof.ch/src/bueroVideolution/videolutionsTitelbildBlur.jpg',
      path: 'OfficeVideolution',
      art: 'Furnishing - Remodeling - Renovation',
      size: 'small (0-50m2)',
      concept: 'Modern Office',
      ethos: 'Clear geometric shape, natural materials and colors, form follows function',
      requirements: [
        'Division into office/studio and meeting room',
        'Space for samples, materials, and machines',
        'Representative design for the meeting room',
        'Ergonomic requirements for the workplace',
        'Acoustic measures to dampen sound',
      ],
      content: [
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!falsch?????????????!!!!!!!!!!!!!!!!!
        {
          text: `The composition of colors and materials is based on natural colors. 
          The goal is to introduce something plant-like into the interior with materials,
          such as the wallpaper, without using actual plants. The general color scheme
          is set to be rather dark since there are already many light surfaces in the interior
          that won't be painted over. The introduced textiles serve, among other things, for
          acoustics and dampen the ambient noise.`,
          src: 'https://meinhof.ch/src/bueroVideolution/videolutionsMoodboard.jpg',
        },
        {
          text: `In the meeting room, the aim was to show as many variations of the
           design elaboration as possible. For this, custom furniture (table, sideboard,
            barista corner, wall shelves, etc.), designer pieces (chairs, desk lamp, wallpaper, etc.),
             and very basic furnishings and accessories from well-known furniture stores
             (cups, vase, carpet, etc.) were used. The goal was not to show the optimum or the
             perfect series but to highlight as many differences as possible.`,
          src: 'https://meinhof.ch/src/bueroVideolution/videolutionsPlan.jpg',
          src2: 'https://meinhof.ch/src/bueroVideolution/videolutions01.jpg',
        },
        {
          text: `In the studio and office space, function and ergonomics are paramount. There 
          is a high need for storage space for books and samples as well as various equipment.
          The desk is continuously height-adjustable to allow working in different positions.
          The materials should have a clear connection to the meeting room and complement the
          material concept.`,
          src: 'https://meinhof.ch/src/bueroVideolution/videolutions01.jpg',
          src2: 'https://meinhof.ch/src/bueroVideolution/videolutionsPlan.jpg',
        },
      ],
    },
    {
      header: 'Puristic Bathroom',
      src: 'https://meinhof.ch/src/puristischesBadezimmer/badezimmerOg01TitelbildBlur.jpg',
      path: 'PuristicBathroom',
      art: 'Renovation',
      size: 'small (0-50m2)',
      concept: 'The puristic bath',
      ethos: 'Clear geometric shape, natural materials and colors, form follows function',
      requirements: [
        'Minimal intervention in the basic substance',
        'Timeless and elegant design',
        'Consistent design language',
        'Modernization on existing connections',
        'Durable and easy-care materials',
      ],
      content: [
        {
          text: `From the outset, the concept idea strongly influenced the design when choosing 
          the materials for this bathroom. The aim is to create a bathroom that appears puristic
          both in color and form. In terms of color, this means: shades of gray to black. This color
           combination is distinguished by shiny and matte, structured and smooth, as well as warm
           and cold elements.`,
          src: 'https://meinhof.ch/src/puristischesBadezimmer/puristischeBadezimmerMoodbord.jpg',
        },
        {
          text: `The existing connections will be reused. The floor is removed and relaid. The 
          existing tiles on the walls remain; they are plastered with a special putty. This keeps
           the structural intervention very minimal.`,
          src: 'https://meinhof.ch/src/puristischesBadezimmer/puristischesBadezimmerOg01.jpg',
          src2: 'https://meinhof.ch/src/puristischesBadezimmer/puristischesBadezimmerOg02.jpg',
        },
        {
          text: `The bathroom furniture was planned for the bathroom to achieve as many of the
           required functions as possible. The room was clearly reduced both in color and structure.
           This reduction results in a much airier atmosphere in the small bathroom. All materials
            and fittings were chosen so that the surfaces harmonize with each other and create a
            coherent overall picture.`,
          src: 'https://meinhof.ch/src/puristischesBadezimmer/puristischesBadezimmerEg01.jpg',
          src2: 'https://meinhof.ch/src/puristischesBadezimmer/puristischesBadezimmerEg02.jpg',
        },
      ],
    },
    {
      header: 'Studio New Build',
      src: 'https://meinhof.ch/src/neubauStudio/titelbildProjectRoggwil.jpeg',
      path: 'StudioNewBuild',
      art: 'Extension',
      size: 'medium (50-100 m2)',
      concept: 'Regional Mediterranean',
      ethos:
        'Design ethos: Organic and regional materials, colorful and warm colors, privacy through interlocking',
      requirements: [
        'Biodegradable materials',
        'Compliance with monument protection',
        'Warm, homely atmosphere',
        'Clear and simple geometry',
        'Accommodation of bathroom, entrance, and treatment room',
      ],
      content: [
        {
          text: `In the choice of materials for this project, sustainability and 
          regional availability were paramount. Natural building materials were used,
          such as clay plaster, wood, and natural stone. In terms of color design, care
          was taken to create a play of various warm colorful tones. This creates a very
          warm and homely atmosphere in the interior of the annex.`,
          src: 'https://meinhof.ch/src/neubauStudio/projektRoggwilMoodboard.jpg',
        },
        {
          text: `Since the building is rather small, a floor plan was developed together 
          with the building owner, which accommodates the various functions through an
          interlocking of the interior space. Since the construction of the building spans
          the entire interior, the walls can be designed as lightweight walls, so they can
          be easily dismantled if the building is repurposed.`,
          src: 'https://meinhof.ch/src/neubauStudio/projektRoggwil01.jpg',
          src2: 'https://meinhof.ch/src/neubauStudio/projektRoggwil02.jpg',
        },
        {
          text: `Since the building is intended for use as a health practice, all architectural 
          psychological aspects should be adhered to as much as possible. This includes design
          elements such as room height, room geometry, color, materials, view, light, and much
          more. These aspects were decisive for the definitive elaboration of the project.`,
          src: 'https://meinhof.ch/src/neubauStudio/projektRoggwil03.jpg',
          src2: 'https://meinhof.ch/src/neubauStudio/projektRoggwil04.jpg',
        },
      ],
    },
    {
      header: 'Lakefront Apartment',
      src: 'https://meinhof.ch/src/wohnungAmSee/neuenburg02TitelbildBlur.jpg',
      path: 'LakefrontApartment',
      art: 'Furnishing',
      size: 'medium (50-100 m2)',
      concept: 'Beach apartment by the lake',
      ethos: 'Modern and futuristic design, fresh, summery design, coziness',
      requirements: [
        'Fresh new design',
        'Colors in the spectrum blue-gray-beige',
        'Comfort of the seating furniture',
        'Multifunctional properties',
        'Reduced decoration',
      ],
      content: [
        {
          text: `The color choice of the furnishings was clearly desired by the
                 building owner during the preliminary discussion. Most of the materials
                 in the room were already determined. With the existing materials and the
                  set colors, furniture was either assembled or planned, resulting in the
                  final color composition.`,
          src: 'https://meinhof.ch/src/wohnungAmSee/wohnungAmSeeMoodboard.jpg',
        },
        {
          text: `At the beginning of the apartment planning, the needs of the
                 building owner were determined. With this analysis, a basic concept,
                 with the furniture to be planned, was developed. In this case, some commercial
                 products were used and combined with custom creations.`,
          src: 'https://meinhof.ch/src/wohnungAmSee/wohnungAmSee01.jpg',
          src2: 'https://meinhof.ch/src/wohnungAmSee/wohnungAmSee02.jpg',
        },
        {
          text: `When selecting the furniture, care was taken to ensure that 
                it harmonizes with the existing materials and creates a connection 
                between them. The carpet, for example, is a custom-made product that was made 
                exclusively for this living room in that combination. In this way`,
          src: 'https://meinhof.ch/src/wohnungAmSee/wohnungAmSee03.jpg',
          src2: 'https://meinhof.ch/src/wohnungAmSee/wohnungAmSee04.jpg',
        },
      ],
    },
  ],
  imprint: {
    title: 'imprint',
    content: [
      {
        header: 'WEBSITE OPERATOR',
        text: ['JULIUS MEINHOF, MEINHOF GMBH'],
      },
      {
        header: 'COMPANY INFORMATION',
        text: [
          'LIMITED LIABILITY COMPANY (GMBH)',
          'GRISIGENSTRASSE 12',
          'HORW, 6048',
          'E-MAIL: JULIUS@MEINHOF.CH',
          '+41 (0)789715031',
        ],
      },
      {
        header: 'COMPANY REGISTRATION INFORMATION',
        text: ['CHE-239.220.789'],
      },
    ],
  },
  privacy: {
    title: 'privacy',
    content: [
      {
        header: 'Meinhof Interior Design Privacy Policy',
        text: [
          `This privacy policy describes how your personal data is collected,
           used, and shared when you use or make a purchase on meinhof.ch.
           By "personal data" in this privacy policy, we refer to both device information
           and order information.`,
        ],
      },
      {
        header: 'HOW DO WE USE YOUR PERSONAL DATA?',
        text: [
          `Please note that we do not change our website's data collection and usage 
          procedures when we receive a "Do Not Track" signal from your browser.`,
        ],
      },
      {
        header: 'DO NOT TRACK',
        text: [
          `Please note that we do not change our website's data collection and usage 
          procedures when we receive a "Do Not Track" signal from your browser.`,
        ],
      },
      {
        header: 'YOUR RIGHTS',
        text: [
          `If you are a resident of Europe, you have the right to access the personal 
          data we hold about you and to ask for its correction, update, or deletion.
          If you wish to exercise this right, please contact us using the contact
          details provided below. If you are a resident of Europe, we also note that
          we process your data to fulfill contracts with you (e.g., if you place an
            order through the website) or to pursue our aforementioned legitimate
            business interests. Please also note that your data will be transferred
            outside of Europe, including to Canada and the United States.`,
        ],
      },
      {
        header: 'CONTACT',
        text: [
          `If you need more information about our privacy practices, have questions, 
          or want to file a complaint, please contact us by email at julius@meinhof.ch
          or by mail using the address below:`,
          'Grisigenstrasse 12, Horw, Luzern, 6048, Switzerland',
        ],
      },
    ],
  },
  navigations: {
    legal: [
      {
        header: 'Imprint',
        src: 'https://meinhof.ch/src/titelbilder/badehausBeleuchtet.jpg',
        path: 'Imprint',
      },
      {
        header: 'Privacy',
        src: 'https://meinhof.ch/src/titelbilder/badehausBeleuchtet.jpg',
        path: 'Privacy',
      },
    ],
    home: [
      {
        header: 'Location',
        src: '',
        path: '#location',
      },
      {
        header: 'About Us',
        src: '',
        path: '#about',
      },
      {
        header: 'Projects',
        src: '',
        path: '#projects',
      },
    ],
    bottom: [
      {
        header: 'Office Horw',
        src: 'https://meinhof.ch/src/bueroHorw/bueroHorwV01.jpg',
        path: '/OfficeHorw',
      },
      {
        header: 'Office Videolution',
        src: 'https://meinhof.ch/src/bueroVideolution/videolutions01.jpg',
        path: '/OfficeVideolution',
      },
      {
        header: 'Puristic Bathroom',
        src: 'https://meinhof.ch/src/puristischesBadezimmer/puristischesBadezimmerOg01.jpg',
        path: '/PuristicBathroom',
      },
      {
        header: 'New Construction Studio',
        src: 'https://meinhof.ch/src/neubauStudio/projektRoggwil03.jpg',
        path: '/NewConstructionStudio',
      },
      {
        header: 'Lakefront Apartment',
        src: 'https://meinhof.ch/src/wohnungAmSee/wohnungAmSee04.jpg',
        path: '/LakefrontApartment',
      },
    ],
  },
  error: {
    title: 'An error has occurred',
    content: 'You can reload the page or by clicking on the logo you will be taken back to the homepage',
  },
};
