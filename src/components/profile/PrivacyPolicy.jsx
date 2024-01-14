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

const PrivacyPolicy = () => {
  return (
    <div className='overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-[#15C7B3] scrollbar-track-white scrollbar-corner-[#15C7B3] px-2 sm:px-4 max-h-[30em] sm:max-h-[85vh] w-full'>
        <div className='space-y-4'>
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
                </div>
                <div className='flex justify-end mt-8 mr-4 pb-4'>
                  <button className='bg-primary text-[12px] text-white py-2 sm:py-2.5 rounded-lg px-2 sm:px-3'>Accept</button>
                </div>
    </div>
  )
}

export default PrivacyPolicy