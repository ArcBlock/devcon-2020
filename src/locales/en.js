/* eslint global-require:"off" */
const flatten = require('flat');

module.exports = flatten({
  title: 'Arcblock | Blockchain 3.0',
  description: 'Born for blockchain 3.0',
  keywords: 'blockchain, platform, cloud, developer, arcblock',

  menu: {
    speakers: 'Speakers',
    schedule: 'Schedule',
    partners: 'Partners',
    tickets: 'Tickets',
    workshop: 'Workshop',
    hackathon: 'Hackathon',
    faq: 'FAQ',
    myBadges: 'Badges',
    login: 'Login',
    logout: 'Logout',
  },

  footer: {
    source: 'GitHub',
    abtnode: 'ABT Node',
    blocklets: 'Blocklets',
    framework: 'Blocklets Framework',
  },

  tickets: {
    comingSoon: {
      desc: 'Coming Soon',
    },
    myTickets: {
      title: 'My Tickets',
    },
    freeAuth: {
      title: 'Get ArcBlock DevCon2020 Free Ticket',
      scan: 'Scan QrCode to ArcBlock DevCon2020 free ticket',
      confirm: 'Confirm on your ABT Wallet',
      success: 'ArcBlock DevCon2020 free ticket sent to your account',
    },
    proAuth: {
      title: 'Get ArcBlock DevCon2020 Premium Ticket',
      scan: 'Scan QrCode to ArcBlock DevCon2020 premium ticket',
      confirm: 'Confirm on your ABT Wallet',
      success:
        'ArcBlock DevCon2020 premium ticket will be sent to the wallet in a few minutes, please refresh in the wallet!',
    },
    title: 'Get your tickets',
    freeTicketName: '0 ABT',
    premiumTicketName: '100 ABT',
    rules: {
      premium: {
        one: '1. Access to all DevCon sessions',
        two: '2. Premium Badge & Certificate (NFT)',
        three: '3. Slides PDF to download',
        four: '4. Ebook: The Hitchhiker’s Guide to Blockchain',
        five: '5. Paper Book: The Real Practice of Blockchain by CITIC Press',
      },
      free: {
        one: '1. Access to all DevCon sessions',
        two: '2. Free Badge & Certificate (NFT)',
      },
    },
    desc:
      "Acquire or transfer your ticket(s) using your ABT Wallet. If you don't have ABT Wallet simply follow the instructions below.",
    getWallet: {
      title: 'How to get ABT Wallet',
      descPartOne:
        "You need to download and setup ArcBlock's ABT Wallet to get, purchase or transfer your ticket. ",
      wallet: 'ABT Wallet',
      descPartTwo:
        "is a fully decentralized identity wallet that lets you control your identity including access websites, apps, and control different types of blockchain-based assets such as ArcBlock DevCon 2020's event tickets in your wallet.",
      downloadIOS: 'DOWNLOAD IOS',
      downloadAndroid: 'DOWNLOAD ANDROID',
    },
    setupWallet: {
      title: 'Wallet Setup',
      desc:
        'After downloading, follow the steps to set up your wallet and create your first profile.',
    },
    prepare: {
      title: 'Prepare Your Native ABT Account',
      descPartOne:
        "If you want to buy the premium ticket, you should have a native ABT Account in your wallet. If you don't have it, you can go to our Token Swap site create a native account with",
      wallet: 'ABT Wallet',
      descPartTwo: ', and do some recharge ( 1 premium ticket is 100 ABT).',
      btn: 'Get Native ABT Account',
    },
    buyTicket: {
      title: 'Buy Your Tickets',
      descPartOne:
        "With your wallet setup, you can now purchase your tickets. If you don't have any ABT in your wallet don't worry. you can still attend ArcBlock DevCon 2020 for free and attend all the sessions, talks and workshops. Now, select your ticket, sign-in by scanning the QR Code and you will see",
      descPartTwo: 'Get ArcBlock DevCon 2020 Ticket.',
      loginBuy: 'Login To Buy',
      loginGet: 'Login To Get',
      proBuy: 'Premium Ticket (100 ABT)',
      freeBuy: 'Free Ticket',
      noNeedFreeBuy: 'You have got one',
      myTickets: 'My Tickets',
      myOrders: 'My Orders',
    },
    shareTicket: {
      title: 'Share Your Tickets',
      desc: 'You can share your tickets by follow steps in the ABT Wallet:',
      stepOne: '1. Long Click the ticket card',
      stepTwo: '2. Click "Send Asset" menu',
      stepThree: '3. Input receiver address on the Native ABT Chain',
      stepFour: '4. Check receiver info and confirm to send',
      stepFive:
        '5. Send success, your ticket will lose NFT feature and only be a Verifiable Credential',
    },
  },
  myTickets: {
    title: 'My Tickets',
    loading: 'Tickets is loading, please wait...',
    noTicket: 'Your have no ticket yet...',
    goToBuy: 'Get Your Ticket',
  },
  claim: {
    title: 'Claim Tickets',
    give: 'Give to my friend',
    emailTip: 'Please provide email address of your friend',
    emailLabel: 'Email address',
    emailError: 'This email belongs to you',
    cancel: 'Cancel',
    confirm: 'Send Ticket',
    tokenError: 'Claim token invalid',
    giveDialog: {
      title: 'Signature Required',
      scan: 'Scan QR code to give this ticket to your friend',
      confirm: 'Confirm on your ABT Wallet',
      success: 'Email link sent',
    },
    claimDialog: {
      title: 'Signature Required',
      scan: 'Scan QR code to claim this ticket to your ABT Wallet',
      confirm: 'Confirm on your ABT Wallet',
      success: 'Ticket sent to your ABT Wallet',
    },
  },
  topic: {
    title: 'Watch Live',
    watchLinks: 'Watch Links',
    moreActions: 'More Actions',
    allSchedules: 'All Schedules',
    firstDay: 'First Day',
    secondDay: 'Second Day',
    goToGetCert: 'Go To Get Certificate',
    topicLoading: {
      desc: 'Topic is loading, please wait a moment...',
    },
    noTopic: {
      desc: 'Sorry, this Topic is being prepared, please watch other topics first...',
      btnTxt: 'Watch Others',
    },
    checkingTicket: {
      desc: 'Ticket is being checked, please wait a moment...',
    },
    noStart: {
      desc: 'This Topic has not been started yet, and the starting time is:',
      seeOther: ",Let's look at the others first",
      btnTxt: 'Explore More Topics',
    },
    startingOrEnded: {
      desc: 'Congratulations on meeting your viewing qualification! ',
      clickJump: 'Please click the button below to watch',
      seeStream: ' watch the live broadcast',
      seeVideo: ' watch the replay',
      btnTxt: 'Go To Watch',
    },
    noTicket: {
      desc: 'You have no ticket.',
      btnTxt: 'Go To Buy',
    },
    unLogin: {
      loginTxt: 'Please log in first, ',
      desc: 'After login, we will check your ticket collection and purchase status...',
      btnTxt: 'Login',
    },
    getCertAuth: {
      title: 'Get ArcBlock DevCon2020 Certificate',
      scan: 'Scan QrCode to ArcBlock DevCon2020 Certificate',
      confirm: 'Confirm on your ABT Wallet',
      success: 'ArcBlock DevCon2020 Certificate sent to your account',
    },
    getBadgeAuth: {
      title: 'Get ArcBlock DevCon2020 Badge',
      scan: 'Scan QrCode to ArcBlock DevCon2020 Badge',
      confirm: 'Confirm on your ABT Wallet',
      success: 'ArcBlock DevCon2020 Badge sent to your account',
    },
    getBadge: 'Get Badge',
    haveGotBadge: 'Have Got Badge',
    myBadges: 'My Badges',
    downloadPPT: 'Download PPT',
    downloadBook: 'Download 《Blockchain Ride Guide》',
  },
  myOrders: {
    title: 'My Orders',
    id: 'ID',
    bought: 'Bought',
    payment: 'Payment',
    status: 'Status',
    createAt: 'Created At',
    updateAt: 'Updated At',
    detail: 'Detail',
    noOrder: 'No Order...',
    close: 'Close',
    checkout: 'CheckOut',
    orderDetail: 'Order Detail',
    auth: {
      title: 'Checkout',
      scan: 'Scan QR code to checkout',
      confirm: 'Confirm on your ABT Wallet',
      success: 'Payment Success',
    },
  },
  myBadges: {
    title: 'My Badges',
    loading: 'Badges are loading, please wait...',
    noBadge: 'Your have no badge yet! go to join a session and get your badge...',
    goToGet: 'Join And Get',
    getCerts: 'Get Certificates',
    alreadyGotCert: 'Have Got Certificate',
    getAllBadgesFirst: 'Get All Badges Firstly',
    getCert: 'Get Certificate',
    badgeList: 'Badge List',
  },
  countdown: {
    title: 'Get Countdown Badge',
    auth: {
      title: 'Get ArcBlock DevCon2020 Countdown Badge',
      scan: 'Scan QR code to get countdown badge',
      confirm: 'Confirm on your ABT Wallet',
      success: 'ArcBlock DevCon2020 Countdown Badge sent to your account',
    },
    tip: 'Login status verification, you can get the countdown badge after login...',
    tipOver: 'The countdown event has ended!',
  },
  hackathonBadge: {
    title: 'Hackathon Badge',
    auth: {
      title: 'Get ArcBlock DevCon2020 Hackathon Badge',
      scan: 'Scan QR code to get hackathon badge',
      confirm: 'Confirm on your ABT Wallet',
      success: 'ArcBlock DevCon2020 Hackathon Badge sent to your account',
    },
    tip: 'Login status verification, you can get the hackathon badge after login...',
    allProjects: 'All Hackathon Projects',
  },
});
