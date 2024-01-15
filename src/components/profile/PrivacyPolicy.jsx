import {
  UploadFile,
  AIEmailPanel,
  ChatBotOnline,
  ChatPanelAIBot,
  Customization,
  CustomizeBorderGreen,
  DocumentCustomizePopupPanel,
  BottomRightPanelMSWord,
  EditButton,
  TargetButton,
  EmailOrMSWord,
  EmailOrText,
  FileUploadHighlightPanel,
  GenerateAndSendReport,
  HighlightPanel,
  IconSendToMSWord,
  IconTurnIntoGreen,
  InputSendProblems,
  InputSendProblemSubmitIcon,
  MSWordReport,
  OptionsButton,
  RadioPositiveOrNegativeWords,
  SaveButton,
  SaveDocumentDrive,
  SendButton,
  SendPanel,
  ShareButton,
  SosialMediaShare,
  TextEditorPanel,
  UploadCustomizedPopupPanel,
  UploadFileOnRespectiveIcon,
  UploadFileValidate,
  ViewAllDocuments, 
  ChatAIPanelAndCustomization} from '../../assets/termOfConditions'
  import MsWord from '../../assets/termOfConditions/MsWord.png'

import { IoIosAddCircleOutline } from "react-icons/io";
import { HiMiniMinusSmall } from "react-icons/hi2";

const WithMinusList = ({children}) => {
  return (
    <div className="flex items-start gap-3 sm:gap-6">
        <div>
        <HiMiniMinusSmall className='mt-1' size={20} />
        </div>
      {children}
    </div>
  )
}

const WithBorderRounded = ({children}) => {
  return (
    <div className="flex items-start w-full gap-3 sm:gap-6">
     <div>
      <div className='h-1.5 w-1.5 mt-2 rounded-full bg-black dark:bg-white/80' />
     </div>
      {children}
    </div>
  )
}



const WithOutlineRounded = ({children}) => {
  return (
    <div className="flex items-start gap-3 sm:gap-6">
      <div>
        <div className='h-[7px] w-[6px] mt-2 rounded-full border border-black dark:border-white' />
      </div>
      {children}
    </div>
  )
}

const TextBlock = ({children, title = ""}) => {
  return (
    <div className="flex flex-col gap-3">
        <h1 className='font-semibold'>{title}</h1>
        <p className='text-black/70 sm:text-base text-sm dark:text-white/80'>{children}</p>
    </div>
  )
}

const PrivacyPolicy = () => {
  return (
    <div className='overflow-y-auto py-4 sm:py-8 scrollbar-thin scrollbar-thumb-[#15C7B3] scrollbar-track-white scrollbar-corner-[#15C7B3] px-4 sm:px-8 max-h-[30em] sm:max-h-[85vh] w-full'>
      <div className="space-y-8">
        <TextBlock title="Terms and Conditions">
        Your privacy is important to Swift Intellect. This privacy policy (“Policy”) applies to the Swift Intellect sites and services and tells you how personal information is collected, used, disclosed, and protected by Swift Intellect. This statement includes both Swift Intellect's European Union - U.S. Safe Harbor Privacy Statement and the Website Privacy Statements.
        </TextBlock>
        <TextBlock title={"Changes to This Policy"}>
        We may change this Policy from time to time. If we make any changes to this Policy, we will change the “last updated” date above. If there are material changes to this Policy, we will notify you more directly. We encourage you to check this Policy whenever you use our Web sites and services to understand how your personal information is used
        </TextBlock>
        <TextBlock title="Information Collected">
        We collect information from you in various ways when you use our Web sites and services. We may also supplement this information with information from other companies. We collect two general types of information, namely personal information and aggregate data. As used in this Policy, the term “personal information” means information that specifically identifies an individual (such as a name and email address), and demographic and other information when directly linked to information that can identify an individual.
        </TextBlock>
        <TextBlock>
        Our definition of personal information does not include “aggregate” data. Aggregate data is information we collect about a group or category of services or users from which individual user identities have been removed. In other words, no personal information is included in aggregate data. Aggregate data helps us understand trends in our users needs so that we can better consider new features or otherwise tailor our services. This Policy in no way restricts or limits our collection and use of aggregate data, and we may share aggregate data about our users with third parties for various purposes, including to help us better understand our customer needs and improve our services and for advertising and marketing purposes.
        </TextBlock>
        <TextBlock>
        The following are the specific types of information we collect from you Information You Give Us. We collect information you give us on our Web site and when you register for and use our services. Examples include the following:
        </TextBlock>
        <TextBlock>
        Registration and Profile Information. When you register to use our services or update your profile, we may collect various kinds of information about you including, your name and email address; your title, company and other profile information you provide; demographic information; and information you upload like photos, files, and documents.
        </TextBlock>
        <TextBlock>
        Payment Information. If you choose to use a paid Swift Intellect's account or service, our payment processing vendor collects your credit card information and billing address.
        </TextBlock>
        <TextBlock>
        Third-Party Account Information. When you connect our services to your marketplace accounts on third-party websites, we collect the login and authentication information necessary to maintain the connection, as well as any information downloaded from these third-party websites, such as order and inventory information.
        </TextBlock>
        <TextBlock>
        Submissions and Customer Service. From time to time we may use surveys, contests or sweepstakes requesting personal or demographic information and customer feedback.
        </TextBlock>
        <TextBlock>
        Automatically Collected Information. We automatically receive certain types of information when you interact with our Web pages, services and communications. For example, it is standard for your Web browser to automatically send information to every Web site you visit, including ours. That information includes your computer's IP address, access times, your browser type and language, and referring Web site addresses. We may also collect information about the type of operating system you use, your account activity, and files and pages accessed or used by you
        </TextBlock>
        <TextBlock>
        Cookies and Web Beacons. We may also use certain kinds of technology such as cookies and Web beacons to collect information. Among other things, the use of cookies and Web beacons enables us to improve our Web sites and emails by seeing which areas and features are most popular, to count the number of computers accessing our Web site, to personalize and improve your experience, to record your preferences, and to allow you to visit our Web site without re-entering your member ID and/or password. A cookie is a small amount of data which is sent to your browser from a Web site's computers and stored on your computer's hard drive. Most browsers automatically accept cookies as the default setting. You can modify your browser setting to reject our cookies or to prompt you before accepting a cookie by editing your browser options. However, if a browser is set not to accept cookies or if a user rejects a cookie, some portions of the Web site and services may not function properly.
        </TextBlock>
        <TextBlock>
        For example, you may not be able to sign in and access certain Web page features or services. A Web beacon is an electronic image, also called a “gif,” that may be used on our Web pages to deliver cookies, count visits and compile statistics on usage and campaign effectiveness or in our emails to tell if an email has been opened and acted upon
        </TextBlock>
        <TextBlock title='Use of Personal Information'>
        In general, we use your personal information to process your requests or transactions, to provide you with information or services you request, to inform you about other information, events, promotions, products or services we think will be of interest to you, to facilitate your use of, and our administration and operation of, the Web site and services and to otherwise serve you and our users. For example, we may use your personal information: 
        </TextBlock>
        <TextBlock>
        To request feedback and to enable us to develop, customize and improve the Web site and our publications, products and services;
        </TextBlock>
        <TextBlock>
        To conduct marketing analysis, to send you surveys or newsletters, to contact you about services, products, activities, special events or offers from Swift Intellect or our partners and for other marketing, informational, product or service development and promotional purposes;
        </TextBlock>
        <TextBlock>
        To send you a welcoming email and to contact you about your use of the Web site and services; to respond to your emails, submissions, comments, requests or complaints; to perform after-sales services; to anticipate and resolve problems with our service; to respond to customer support inquiries, for assistance with our product and service development; and to inform you of updates to products and services from Swift Intellect that better meet your needs;
        </TextBlock>
        <TextBlock>
        To send and receive order and inventory information from third-party websites in which you have an account for the purposes of the services of our websites;
        </TextBlock>
        <TextBlock>
        To contact you if you win a contest; and for other purposes about which we notify you. Swift Intellect may store and process personal information in the United States and other countries.
        </TextBlock>
        <TextBlock>
        Swift Intellect adheres to the U.S. Department of Commerce's Safe Harbor privacy principles regarding the collection, use, and retention of personal information from the European Union. For more information about the Safe Harbor Principles, please visit the U.S. Department of Commerce's Website at http://export.gov/safeharbor/.
        </TextBlock>
        <TextBlock title='Sharing of Personal Information'>
        Swift Intellect reserves the right to share aggregated demographic information about our customers, sales, and traffic to our partners and advertisers. We will not give, sell, rent, share, or trade any of your personal information or any data that you store using our services to any third party except as outlined in this Policy or with your consent. We may disclose information to a third party to (a) comply with laws or respond to lawful requests and legal process, (b) to protect Swift Intellect, agents, customers, and others including to enforce our agreements, policies and terms of use or (c) in the good faith belief that disclosure is needed to respond to an emergency, or protect the personal safety of any person.
        </TextBlock>
        <TextBlock>
        Swift Intellect provides you with opportunities to connect with third party services and includes product features that by their nature share information with those third party services. Those services can see your merchantorder information, inventory information and counts, shipment tracking numbers and other related information. If you choose to use any such third party services, we may facilitate sharing of your information with those services. Your use of such services is not governed by Swift Intellect's terms or privacy policy.
        </TextBlock>
        <TextBlock>
        Swift Intellect does not control the services of those third parties or how they use your information and documents. Be sure to review the terms and the privacy policies of those third parties before using their services.
        </TextBlock>
        <TextBlock>
        We may share personal information in connection with an acquisition, merger, or sale of all or a substantial portion of our business, with or to another company. In any such event, you will receive notice if your data is transferred and becomes subject to a substantially different privacy policy.
        </TextBlock>
        <TextBlock title='Network and Information Security'>
        Swift Intellect takes reasonable steps to protect information we collect from you to prevent loss, misuse and unauthorized access, disclosure, alteration, and destruction. In addition, highly confidential personal information such as credit card number and password that we request from you on our Web site is protected with encryption, such as Secured Socket Layer (SSL) protocol, during transmission over the Internet.
        </TextBlock>
        <TextBlock>
        The servers on which information is stored are kept in a controlled environment with limited access. While we take reasonable efforts to guard personal information we knowingly collect directly from you, no security system is impenetrable. In addition, we cannot guarantee that any passively-collected personal information you choose to store on our systems are maintained at adequate levels of protection to meet specific needs or obligations you may have relating to that information.
        </TextBlock>
        <TextBlock>
        Your account information and access to our service is accessible only through the use of an individual user ID and password. To protect the confidentiality of personal information, you must keep your password confidential and not disclose it to any other person. Please advise us immediately if you believe your password has been misused. In addition, always logout and close your browser when you finish your session. Please note that we will never ask you to disclose your password in an unsolicited phone call or email.
        </TextBlock>
        <TextBlock title='Updating and Accessing Personal Information'>
        If your personal information changes in any way, we invite you to correct or update your information as soon as possible. You can make updates to your profile information by logging into your account on Swift Intellect at any time. You can also request changes or access to your information by emailing Swift Intellect.
        </TextBlock>
        <TextBlock title='Choice/Opt-Out'>
        Swift Intellect may send you communications or data regarding our Web sites and services, including but not limited to (i) notices about your use of our Web sites and services, including any notices concerning violations of use, (ii) updates, and (iii) promotional information and materials regarding our products and services. You may opt-out of receiving promotional emails from Swift Intellect by following the opt-out instructions provided in those emails. Opt-out requests will not apply to transactional service messages, such as security alerts and notices about your current account and services.
        </TextBlock>
        <TextBlock title='Return & Refund Policy'>
        Thanks for shopping at Swift Intellect. If, however, you are not entirely satisfied with your purchase, we're here to help. Please read below for further details.
        </TextBlock>
        <TextBlock title='Returns'>
        You have 30 (change this) calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging. Your item needs to have the receipt or proof of purchase.
        </TextBlock>
        <TextBlock title='Refunds'>
        Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
        </TextBlock>
        <TextBlock title='Shipping'>
        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable. If you receive a refund, the cost of return shipping will be deducted from your refund. If you have any questions on how to return your item to us, contact us directly.
        </TextBlock>
        <TextBlock title='Enforcement'>
        If you have any questions about this Policy, you should first contact us at Swift Intellect.
        </TextBlock>
        <TextBlock title='Contacting Us'>
        Any questions about this Policy should be addressed to Swift Intellect.
        </TextBlock>
      </div>
        {/* <div className='space-y-4'>
                  <h1 className='text-lg font-semibold'>How to use the Software:</h1>
                  <div className='text-black/80 px-8 sm:px-12 pt-4 w-full space-y-8 dark:text-slate-300'>
                   <p className='text-lg font-semibold text-black dark:text-white'>multiple file QnA( Web app)</p>
                   <img src={UploadFile} alt='Upload File Panel' width={400} height={400} className='max-w-[780px] rounded-md w-full mx-auto' />
                   <p>User has two choice (Top left Panel)</p>
                    <div className='w-full border border-black dark:border-white' />
                    <div className="px-4 sm:px-10">
                      <WithMinusList>
                        <p className=' sm:text-base text-sm'><strong>Standard</strong> Option (upload multiple files and QnA or summaries all of them at the same time with a single prompt)</p>
                      </WithMinusList>
                      <div className=" pt-6 px-1.5 sm:px-12">
                        <WithBorderRounded>
                          <p>User click on Standard: </p>
                        </WithBorderRounded>
                        <div className="pt-8 px-1.5 space-y-6 sm:px-12">
                          <WithOutlineRounded>
                            <p className=' sm:text-base text-sm'>this section on the bottom left panel appear :</p>
                          </WithOutlineRounded>
                          <img src={Customization} alt='Customization Component' width={140} height={760} className='rounded-md max-h-[750px] h-full max-w-[350px]' />
                          <WithOutlineRounded>
                            <p className=' sm:text-base text-sm'>these button disappear</p>
                          </WithOutlineRounded>
                          <img src={GenerateAndSendReport} alt="Generate and Send Report Buttons" className='rounded-md' width={230} height={250} />
                        </div>
                      </div>
                      <div className=" pt-6 px-1.5 space-y-2 sm:px-12">
                       <WithBorderRounded>
                          <p>User can upload a file by clicking on the respective icon:</p>
                        </WithBorderRounded>
                        <div className="px-4 sm:px-12 space-y-6">
                          <img src={UploadFileOnRespectiveIcon} alt="UploadFileOnRespectiveIcon Panel" width={550} height={380} className='rounded-md' />
                          <WithOutlineRounded>
                            When clicking on the Icon, a small pop up window appear allowing the user to upload the respective file and click validate or cancel
                          </WithOutlineRounded>
                          <div className="px-4 sm:px-12 space-y-2">
                            <WithBorderRounded>
                              For "Paste Text": it not a file but a text link to be uploaded
                            </WithBorderRounded>
                            <WithBorderRounded>
                              For Youtube URL: it not a file but a text link to be uploaded
                            </WithBorderRounded>
                            <WithBorderRounded>
                              For "URL": it not a file but a text link to be uploaded
                            </WithBorderRounded>
                          </div>
                        </div>
                        <div className="px-4 sm:px-12 space-y-6">
                          <WithOutlineRounded>
                            <p className='flex items-center gap-1 flex-wrap'>Note : This icon allow to edit/change the file entered <img src={EditButton} alt='Edit Button' className='rounded-md' width={40} height={40} />(for example if user want to change a uploaded file)</p>
                          </WithOutlineRounded>
                          <WithOutlineRounded>
                            <p className='flex items-center gap-1 flex-wrap'>Note : This icon turn green once its uploaded<img src={IconTurnIntoGreen} alt='Green Button' className='rounded-md' width={35} height={35} /></p>
                          </WithOutlineRounded>
                          <WithOutlineRounded>
                            <p className='flex items-center gap-1 flex-wrap'>Note : This icon allow the user to add more files<IoIosAddCircleOutline color='#633df5' size={30}/> if the user want to upload 10pdf, he can</p>
                          </WithOutlineRounded>
                          <WithOutlineRounded>
                            <p className='flex items-center gap-1 flex-wrap'>Each time a files or url website or other file is uploaded, a preview section is appearing for every upload to grant quick access to users(Pdf, word, youtube video, url website, powerpoint, excel file)</p>
                          </WithOutlineRounded>
                          <img src={ViewAllDocuments} alt='All Documents upload' width={450} height={450} className='rounded-md' />
                        </div>
                      </div>
                      <div className=" pt-6 px-1.5 space-y-2 sm:px-12">
                        <WithBorderRounded>
                        Once user has uploaded all the files, the user can customized the output in the bottom left panel (A specific Section will be dedicated for each of those function)
                        </WithBorderRounded>
                        <img src={Customization} alt='Customization Component' width={140} height={760} className='rounded-md max-h-[750px] h-full max-w-[350px]' />
                        <WithBorderRounded>
                        he can then Chat with his file the prompt in the bottom left panel Chat, or use voice to text functionality.
                        </WithBorderRounded>
                        <img src={InputSendProblems} className='rounded-md' alt='Input Writing question' width={350} height={80} />
                        <WithBorderRounded>
                        <p className='flex items-center gap-1 flex-wrap'>Then user can press enter <img src={InputSendProblemSubmitIcon} alt='Sending question icon' width={35} height={35} className='rounded-md' />and the output is display on bottom left panel chat</p>
                        </WithBorderRounded>
                       <img src={ChatAIPanelAndCustomization} className='rounded-md' width={350} height={350} alt='Chat AI Bot Panel' />
                       <WithBorderRounded>
                       Then user can QnA or generate report with the bottom left panel.
                       </WithBorderRounded>
                       <div className=" pt-6 px-1.5 space-y-2 sm:px-12">
                        <WithOutlineRounded>
                        <p>Note: Each time the user enter a prompt, it will <strong>highlight</strong> the source of the information in the Preview (Top right panel)</p> 
                        </WithOutlineRounded>
                        <img src={ViewAllDocuments} alt='View All Document Uploaded' className='rounded-md' width={450} height={450} />
                        <WithOutlineRounded>
                       <p> Note: Each time the user enter a prompt, The output will also give the <strong>name of the file and pages</strong> where the output was sourced (For quick reference)</p>
                        </WithOutlineRounded>
                        <WithOutlineRounded>
                        Note : This is displaying the positivity or negativity of the output, (is it based with a lot of positive or negative words ?) 
                        </WithOutlineRounded>
                        <img src={RadioPositiveOrNegativeWords} alt='Positive or Negative Radio Words' width={250} height={80} className='rounded-xl' />
                       </div>
                      </div>
                      <div className=" pt-6 px-1.5 space-y-2 sm:px-12">
                        <WithBorderRounded>
                          <p className='flex items-center gap-1 flex-wrap'>
                             The user can also click on this button
                            <img src={TargetButton} alt='Target Button' width={30} height={30} />
                           to write the next prompt that will be based on the content of this selected output chat :
                              </p>  
                        </WithBorderRounded>
                        <div className="pt-2 px-1.5 space-y-2 sm:px-12">
                            <WithOutlineRounded>
                            This button will allow the user to write the next prompt that will be only based on the content of the output generated in the bottom left panel(Using the bottom left panel)
                            </WithOutlineRounded>
                        </div>
                      </div>
                      <h1 className='pt-2 font-semibold'>IMPORTANT</h1>
                      <div className=" pt-2 px-1.5 space-y-2 sm:px-12">
                        <WithMinusList>
                          <div className="flex items-center flex-wrap gap-2">
                          This button <img src={TargetButton} alt='Target Button' width={35} height={35} className='rounded-md' /> should be on the Top left of the chatbox not on the lower right
                          </div>
                        </WithMinusList>
                        <WithMinusList>
                       <p className='flex items-center gap-2 flex-wrap'> 1 Button is missing : <img src={IconSendToMSWord} alt='Icon Sending to MS Word' width={35} height={35} className='rounded-md' />This button allow the user to take the content of the chat box and send it to the bottom right pannel MS Word or send the content by Email directly.</p>
                        </WithMinusList>
                        <div  className=" px-1.5 space-y-2 sm:px-12">
                          <WithOutlineRounded>
                          Below I have tried to correct for those mistake from the The Figma developer ( Obviously the color should not be green)
                          </WithOutlineRounded>
                          <img src={BottomRightPanelMSWord} alt='BottomRightPanelMSWord' width={700} height={200} className='mt-2' />
                          <WithBorderRounded>
                            <div>
                            <p className='flex items-center gap-2 flex-wrap'>
                            The user can click on <img src={IconSendToMSWord} alt='Icon Sending to MS Word' width={35} height={35} className='rounded-md' />and then select and click on this icon MS Word
                            </p>
                            <p className='flex items-end gap-2 flex-wrap'>
                            <img src={MsWord} alt='MsWord' /> this will send the output to the bottom right Panel (Display below)  
                            </p> 
                            </div>
                          </WithBorderRounded>
                          <img src={TextEditorPanel} alt='Text Editor Panel'  className='rounded-md pt-4' />
                          <div className=" px-3 pt-4 space-y-2 sm:px-12">
                            <WithOutlineRounded>
                           <p> Note the file name and the page number will <strong>not</strong> be transferred ! 
                            <strong> only the content.</strong>
                           </p>
                            </WithOutlineRounded>
                          </div>
                          <WithBorderRounded>
                            <p className='flex items-center gap-2 flex-wrap'>If user want to send it through email or text he can click this Icon instead (Email/Text)
                              <img src={EmailOrText} alt='Email Or Text' />
                            </p>
                          </WithBorderRounded>
                          <img src={AIEmailPanel} alt='AI Email Panel' className='mt-2 rounded-md' />
                          <div className="px-3 pt-4 space-y-2 sm:px-12">
                            <WithOutlineRounded>
                              <div className="flex gap-2 flex-wrap items-center sm:items-start">
                              <p className='flex gap-2 items-start flex-wrap'>Note : When user Click on this Icon <img src={IconSendToMSWord} alt='Icon Sending to MS Word' width={35} height={35} className='rounded-md' />then this 2 option appears </p>
                              <img src={EmailOrMSWord} alt='Email or MS Word options' />
                              </div>    
                            </WithOutlineRounded>
                            <WithOutlineRounded>
                            Note : A special section will be dedicated to the email/text functionality
                            </WithOutlineRounded>
                          </div>
                        </div>
                      </div>
                      <div className=" pt-6 px-1.5 space-y-2 sm:px-12">
                        <WithMinusList>
                          <p><strong>Customized</strong> Option : User can enter a prompt for each uploaded file :</p>
                        </WithMinusList>
                        <img src={UploadFile} alt='Upload File Panel' width={700} height={700} />
                        <div className=" pt-6 px-1.5 pb-4 space-y-2 sm:px-12">
                          <WithOutlineRounded>
                            User click on customized this section on the bottom panel disappear
                          </WithOutlineRounded>
                          <img src={Customization} alt='Customization Panel' width={180} height={700} />
                          <WithOutlineRounded>
                          User click on one of the respective section 
                          </WithOutlineRounded>
                          <img src={UploadFileOnRespectiveIcon} alt='UploadFileOnRespectiveIcon' className='mt-2 rounded-md' width={450} height={450} />
                          <WithBorderRounded>
                          Once user click on a respective section, a pop up window appear :User will upload the file, a preview will appear and user can write a prompt and customize its output
                          </WithBorderRounded>
                          <div className=" pt-6 px-1.5 space-y-2 sm:px-12">
                            <WithOutlineRounded>
                            For PPT, PDF, Audio, Excel, Picture/Text it will look like this after selecting the file :
                            </WithOutlineRounded>
                            <img src={DocumentCustomizePopupPanel} alt='DocumentCustomizePopupPanel' width={650} height={650} />
                            <WithOutlineRounded>
                            For Paste Text, this pop up window will appear :
                            </WithOutlineRounded>
                            <img src={UploadCustomizedPopupPanel} alt='UploadCustomizedPopupPanel'  width={650} height={650} />
                            <WithOutlineRounded>
                            For Youtube URL and URL a mixed pop up similar to the two above will appear :
                            </WithOutlineRounded>
                            <div className=" pt-2 px-1.5 space-y-2 sm:px-12">
                              <WithOutlineRounded>
                              Where user paste the link, a preview will appear and then user can write its prompt and customize its output.
                              </WithOutlineRounded>
                            </div>
                            <img src={DocumentCustomizePopupPanel} alt='DocumentCustomizePopupPanel' width={650} height={650} />
                            <WithBorderRounded>
                            User has a preview of the file uploaded or Url  (Pdf, word, youtube video, url website, powerpoint, excel file)
                            </WithBorderRounded>
                            <WithBorderRounded>
                              <p>User can write a prompt that will apply <strong>only</strong> to this file</p>
                            </WithBorderRounded>
                            <WithBorderRounded>
                              <p>User can customize the output that will apply <strong>only</strong> to this file and then click validate</p>
                            </WithBorderRounded>
                          </div>
                          <WithMinusList>
                            <p className='flex items-start flex-col gap-2 flex-wrap'>
                            Once the user has uploaded all the file, the User can click on 2 different button :
                            <img src={GenerateAndSendReport} alt="GenerateAndSendReport" />
                            </p>
                          </WithMinusList>
                          <div className="pt-6 px-1.5 space-y-2 sm:px-12">
                            <WithOutlineRounded>
                            <p>Button “<strong>Generate</strong>" will show the output on bottom left panel chat</p> 
                            </WithOutlineRounded>
                            <img src={ChatPanelAIBot} alt="ChatPanelAIBot" width={350} height={350} />
                            <img src={BottomRightPanelMSWord} alt="BottomRightPanelMSWord" className='mt-4' width={600} height={200} />
                            <div className="pt-6 px-1.5 space-y-2 sm:px-12">
                              <WithOutlineRounded>
                                <p className='flex items-center gap-2 flex-wrap'>The user can then click on This button <img src={TargetButton} className='rounded-md' alt="Target Button" width={35} height={35} />to refine even further :</p>
                              </WithOutlineRounded>
                              <div className="pt-6 px-1.5 space-y-2 sm:px-12">
                                <WithBorderRounded>
                                  <p>This button will allow the user to make the next prompt that will be based <strong>only</strong> on the content of the output generated (Using the bottom left panel)</p>
                                </WithBorderRounded>
                              </div>
                              <WithOutlineRounded>
                                <p className='flex items-center gap-2 flex-wrap'>The user can click on this Icon <img src={IconSendToMSWord} alt="Send Button" />to send the content to the MS words or Email/text</p>
                              </WithOutlineRounded>
                            </div>
                          </div>
                          <WithOutlineRounded>
                            <p>Button “<strong>Generate & Send report</strong>" will send the output to the MS Word directly</p>
                          </WithOutlineRounded>
                          <img src={TextEditorPanel} alt="Text Editor Panel" className='rounded-md' />
                        </div>
                        <div className='w-full border dark:border-white border-black' />
                       <p className='pt-4'>Customized output:</p>
                       <img src={CustomizeBorderGreen} alt="Customize Components" className='rounded-md mt-4' height={400} width={160} />
                       <div className=" pt-6 px-1.5 pb-4 space-y-2 sm:px-12">
                          <WithMinusList>
                          Select Language : ( English, French, German, Spanish, Chinese, all the most famous languages)
                          </WithMinusList>
                          <WithMinusList>
                          Writing style : (Descriptive Style, Narrative Style, Poetic Style, Technical Style, Satirical Style, Minimalist Style, Academic Style, Fantasy Style, Realistic Style, Historical Fiction Style, Journalistic Style, Humorous Style, Science Fiction Style, Mystery/Thriller Style).
                          </WithMinusList>
                          <WithMinusList>
                          Purpose of Writing : (Normal, Essay, Article, Marketing Material, Report, Legal Material, Journalist, Marketing, Email, High School, University, Doctorate, Creative, Business, Technical, Scientific, Medical, Selll Speech ).
                          </WithMinusList>
                          <WithMinusList>
                          Format Options: Paragraphs; Bullet Points ; Numbered Lists; Headings and Subheadings; Emoticons and Emoji.
                          </WithMinusList>
                          <WithMinusList>
                          Font color (choice of colors)
                          </WithMinusList>
                          <WithMinusList>
                          Number of word to be generated : this is a numerical box in which the user decide how many words does he want, if he want 1000 words, he enter the value 1000
                          </WithMinusList>
                          <WithMinusList>
                          Font type : Times New Roman, Arial, Calibri, Helvetica, Verdana, Garamond, Georgia, Palatino, Arial Narrow; Trebuchet MS, Comic Sans MS, Courier New, Copperplate Gothic, Baskerville, Futura, Rockwell, Lucida Sans, Bookman Old Style
                          </WithMinusList>
                          <WithMinusList>
                          Font format : select Bold, Italic, underline 
                          </WithMinusList>
                          <WithMinusList>
                          Large language model : select Chatgpt 3.5, Chat gpt4, Google Bard and more 
                          </WithMinusList>
                          <WithMinusList>
                          Highlight Key words : (Yes or no) User can select this option to have the main keywords highlighted
                          </WithMinusList>
                       </div>
                       <div className='w-full border dark:border-white border-black' />
                       <img src={FileUploadHighlightPanel} alt="File Upload Highlight Panel" />
                       <img src={HighlightPanel} alt="Highlight Panel" />
                       <p className='pt-8 sm:text-base text-sm'>When the User work on the MS Word document, he can highlight a section of the Text and a pop up window will appear its exactly the same for the Real MS word, however 2 additional function need to be added (AI Replace; AI Replace Upload)</p>
                       <div className="pt-6 px-1.5 pb-4 space-y-2 sm:px-12">
                        <WithMinusList>
                        AI Replace : if user click on AI Replace a pop up window will appear,
                        </WithMinusList>
                        <img src={UploadCustomizedPopupPanel} alt="UploadCustomizedPopupPanel" />
                        <div className="pt-2 px-1.5 pb-4 space-y-2 sm:px-12">
                          <WithOutlineRounded>
                          User can paste a text and/or can Write a prompt and customized it output.
                          </WithOutlineRounded>
                          <WithOutlineRounded>
                          The generated content will directly replace the highlighted section.
                          </WithOutlineRounded>
                        </div>
                        <WithMinusList>
                        AI Replace Upload : if user click on AI Replace Upload,
                        </WithMinusList>
                        <div className="pt-2 px-1.5 pb-4 space-y-2 sm:px-12">
                          <WithOutlineRounded>
                          User can upload a file or Link and/or can Write a prompt and customized it output. ( a preview of the uploaded document will be appearing)
                          </WithOutlineRounded>
                          <WithOutlineRounded>
                          The generated content will directly replace the highlighted section.
                          </WithOutlineRounded>
                        </div>
                       </div>
                       <p>For example :</p>
                       <div className="pt-6 px-1.5 pb-4 space-y-2 sm:px-12">
                        <p className='sm:text-base text-sm'>The user will select the file press validate</p>
                        <img src={UploadFileValidate} alt="UploadFileValidate" width={350}height={350} />
                        <p>Then this pop up will appear</p>
                        <img src={DocumentCustomizePopupPanel} alt="DocumentCustomizePopupPanel" />
                        <p>When user Press Validate he will go back to this pop up (in case the user when to add more files) <span className='text-red-500 font-semibold'>(Note : A button Generate will then appear to exit the loop)</span> </p>
                        <img src={UploadFileValidate} alt="UploadFileValidate" className='pb-4' width={350}height={350} />
                        <div className='w-full border dark:border-white border-black' />
                        <p className='pt-4'>A Chat features is available :</p>
                        <img src={ChatBotOnline} alt="Chat Features" className='pb-4' width={350} height={350} />
                        <div className='w-full border dark:border-white border-black' />
                        <p className='pt-4'>Regarding this section for MS Words report </p>
                        <img src={MSWordReport} alt="MSWordReport Buttons" />
                        <img src={SendPanel} alt="Sending Popup Panel" className='pt-4' width={320} height={280} />
                        <p className='pt-6 flex items-center gap-2 flex-wrap'>
                        Icon send <img src={SendButton} alt="Sending Button" /> This button will allow the user to go to the <strong>SEND panel</strong>.
                        </p>
                        <div className="pt-6 px-1.5 pb-4 space-y-2 sm:px-12">
                          <WithMinusList>
                            <p className='flex items-center gap-2 flex-wrap'>When the user click on <img src={ShareButton} alt="Share Button" className='rounded-md' width={35} height={35} /></p>
                          </WithMinusList>
                          <div className="pt-6 px-1.5 pb-4 space-y-2 sm:px-12">
                            <WithOutlineRounded>
                              <p className='flex items-start gap-2 flex-wrap'>Those Icon Appear <img src={SosialMediaShare} alt="Sosial Media Share" width={100} height={50} /> (Otherwise those Icon are not visible) this represent Google drive, Dropbox, onedrive</p>
                            </WithOutlineRounded>
                          </div>
                        </div>
                        <div className="pt-6 px-1.5 pb-4 space-y-2 sm:px-12">
                          <WithMinusList>
                          <p className='flex items-center gap-2 flex-wrap'>When user click on<img src={SaveButton} alt="Save Button Icon" /></p>
                          </WithMinusList>
                          <div className="pt-6 px-1.5 pb-4 space-y-2 sm:px-12">
                            <WithOutlineRounded>
                              <p className='flex items-start gap-2 flex-wrap'>Those Icone appear <img src={SaveDocumentDrive} width={100} alt="Save to Document Drive etc" />(Otherwise those Icon are not visible) this represent Google drive, Dropbox, onedrive</p>
                            </WithOutlineRounded>
                          </div>
                        </div>
                        <div className="pt-6 px-1.5 pb-4 space-y-2 sm:px-12">
                          <WithMinusList>
                            <p className='flex items-start gap-2 flex-wrap'>When user click on button download <img src={OptionsButton} alt="Options Buttons file" className='rounded-md' /> 2 choices will appear </p>
                          </WithMinusList>
                          <div className="pt-6 px-1.5 pb-4 space-y-2 sm:px-12">
                            <WithOutlineRounded>
                              .docx
                            </WithOutlineRounded>
                            <WithOutlineRounded>
                              .pdf
                            </WithOutlineRounded>
                          </div>
                        </div>
                        <p>AI Email/ Text Functionality </p>
                        <img src={AIEmailPanel} alt="AI Email Panel" width={650} height={650} />
                        <div className="pt-6 px-1.5 pb-4 space-y-2 sm:px-12">
                          <WithMinusList>
                          User select if it is for single user or Multiple users
                          </WithMinusList>
                          <WithMinusList>
                          User select gender (Male/ Female)
                          </WithMinusList>
                          <WithMinusList>
                          User select Formal/Informal 
                          </WithMinusList>
                          <div className="text-red-500 font-semibold">
                          <WithMinusList>
                          User select if its for Email or Text ( Missing Slide button)
                            </WithMinusList>
                          </div>
                          <WithMinusList>
                          User enter Names
                          </WithMinusList>
                          <WithMinusList>
                          User select if he wishes to enclosed the AI generated file (AKA MS Word report) or/ and the based
                          </WithMinusList>
                          <WithMinusList>
                          File used for the Analysis
                          </WithMinusList>
                          <WithMinusList>
                          User can customize the style of the email 
                          </WithMinusList>
                        </div>
                        <img src={Customization} alt="Customization Components" width={160} height={500} />
                        <p className='text-red-500 font-semibold pt-4'>Replace Correlation Analysis with “Highlight”</p>
                        <div className="pt-2 px-1.5 pb-4 space-y-2 sm:px-12">
                          <WithMinusList>
                          User can click on this icon “Highlight”, this will include some of the highlight of the MS word report in the email/text
                          </WithMinusList>
                          <WithMinusList>
                          User can click on generate, it will take all the information above to generate an email/ or text 
                          </WithMinusList>
                          <WithMinusList>
                          User can click on Re-make to re-generate the email/text
                          </WithMinusList>
                          <WithMinusList>
                          User can enter a prompt to customized the email/text ( by writing or voice to text functionality) 
                          </WithMinusList>
                          <WithMinusList>
                          User can edit the email manually as well
                          </WithMinusList>
                          <WithMinusList>
                          Once satisfied user can select contacts, and click validate 
                          </WithMinusList>
                          <WithMinusList>
                          User can then click on send.
                          </WithMinusList>
                        </div>
                       </div>
                      </div>
                    </div>
                  </div>
        </div> */}
        <div className='flex justify-end mt-8 mr-4 pb-4'>
          <button className='bg-primary text-[12px] text-white py-2 sm:py-2.5 rounded-lg px-2 sm:px-3'>Accept</button>
        </div>
    </div>
  )
}

export default PrivacyPolicy