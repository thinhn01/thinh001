﻿  module.exports.config = {
  name: "ausand",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Trung Kiên",
  description: "xem ảnh gái ;) ",
  commandCategory: "Gái Instagram",
  usages: "gaiig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.postimg.cc/zXNCXpLc/101532077-252607692632522-6149423592255762752-n.jpg",
"https://i.postimg.cc/Gmhvv2xP/102696636-600641073900545-680375751568529742-n.jpg",
"https://i.postimg.cc/t4SWkjBK/103984289-146572120285640-4617937541860723634-n.jpg",
"https://i.postimg.cc/TPKmH4Sp/118766258-124022546079766-6200862502305252516-n.jpg",
"https://i.postimg.cc/KYCLX5SQ/118773072-656048278658835-6064084591770417784-n.jpg",
"https://i.postimg.cc/bJbnq2qP/119461810-631102450930965-5421244747381091104-n.jpg",
"https://i.postimg.cc/MHSQHKGQ/119683414-332905317916434-8369099894795143607-n.jpg",
"https://i.postimg.cc/NG6XVTN7/119720801-328293621762627-1684741758059582268-n.jpg",
"https://i.postimg.cc/qqxC3VtZ/121389664-662208034669410-1896060638540545247-n.jpg",
"https://i.postimg.cc/tC96HTw0/135368175-2915792238651029-6072960016043035033-n.jpg",
"https://i.postimg.cc/5NpC9JWX/135761719-1326589391051287-834983041277298465-n.jpg",
"https://i.postimg.cc/0yQJb49c/138955177-742003253122788-7719657320948719453-n.jpg",
"https://i.postimg.cc/WbpdHyqT/139000468-426789945339445-6361544552388571223-n.jpg",
"https://i.postimg.cc/Qx6FGqc5/139135541-703573193690064-1947081629976538574-n.jpg",
"https://i.postimg.cc/9XY412ML/139271865-242052333990123-6707059349015859533-n.jpg",
"https://i.postimg.cc/Ss0X1NCv/139360122-3864634686921195-8337017749848133978-n.jpg",
"https://i.postimg.cc/RFcWk5TV/139532857-464936361341875-8564138356407146280-n.jpg",
"https://i.postimg.cc/1XBfzGTk/139751794-282017216817776-2616402098694490668-n.jpg",
"https://i.postimg.cc/8CfJbrJv/140021237-2501192146850910-6621362534136069174-n.jpg",
"https://i.postimg.cc/rsMDcnhG/140292241-423292909116170-8469466577623655614-n.jpg",
"https://i.postimg.cc/VkddYbFh/140657236-3565232900369568-1852782998834928297-n.jpg",
"https://i.postimg.cc/pL4yyXGL/140934457-1104490616694514-6023876874806504765-n.jpg",
"https://i.postimg.cc/wvdvc4dK/143718414-418113449301705-5298347610528137381-n.jpg",
"https://i.postimg.cc/hGmvmW6b/143729561-2704238416463573-6145454221435212666-n.jpg",
"https://i.postimg.cc/qq1vrk60/143918480-124417159479779-4405845363656104255-n.jpg",
"https://i.postimg.cc/RCdFKTs8/144037194-3953451374673058-4764915732749969941-n.jpg",
"https://i.postimg.cc/JnchT31s/144091458-1030665454088811-8173182160119805254-n.jpg",
"https://i.postimg.cc/qqJvWtRj/144127308-111022597632789-4290335190767419338-n.jpg",
"https://i.postimg.cc/TYPP9WBP/144319097-160144555709011-8149694439628814616-n.jpg",
"https://i.postimg.cc/15Y3Y3Zr/144390769-167323128222333-2520375233099240808-n.jpg",
"https://i.postimg.cc/MpMpkJ62/144476726-128216905752636-436155079109698763-n.jpg",
"https://i.postimg.cc/Nj3fBCFy/144969171-2768719170105934-1149960434966062521-n.jpg",
"https://i.postimg.cc/Jhj7n3Hp/145194820-184613990118461-1879046462918329355-n.jpg",
"https://i.postimg.cc/G2QcPcQY/145234331-137087731583631-548730669505391538-n.jpg",
"https://i.postimg.cc/63wWG7dt/145645120-171766031415512-7298066630350506251-n.jpg",
"https://i.postimg.cc/Wz1sXQWy/145994431-1032483833908365-2736226133146839730-n.jpg",
"https://i.postimg.cc/QCYhP0vd/146105594-798809127383772-7078708214397049948-n.jpg",
"https://i.postimg.cc/Wp5Nh1tc/146135632-2567363340223306-7364720262763882706-n.jpg",
"https://i.postimg.cc/PrNtZn8p/146172979-176554220894210-7843378851960371211-n.jpg",
"https://i.postimg.cc/MK4zm3ys/146307040-1323894041327639-360430080386917671-n.jpg",
"https://i.postimg.cc/dVywHR6J/146389912-163719142218019-8595941149934029976-n.jpg",
"https://i.postimg.cc/0NGxx8h3/146466762-763413577920488-4469426632061405284-n.jpg",
"https://i.postimg.cc/k5P9kVYK/146475380-132881805276635-5775560770492691526-n.jpg",
"https://i.postimg.cc/4dJGxDg3/146858520-1915618738588539-7768753411962781703-n.jpg",
"https://i.postimg.cc/cHXSgFxB/146902852-444880256644760-815557398771948211-n.jpg",
"https://i.postimg.cc/sxxRp51d/147112908-257289999375097-6570899048911878779-n.jpg",
"https://i.postimg.cc/MHLJtXjc/147388794-325557868848483-8827336403212086618-n.jpg",
"https://i.postimg.cc/FFCvhCn9/147402581-747456302858524-453391054489719491-n.jpg",
"https://i.postimg.cc/7YCkh1pS/147544722-764983344421602-379400096725697959-n.jpg",
"https://i.postimg.cc/rFvLr0k3/147670144-467792014595724-5784543240580035342-n.jpg",
"https://i.postimg.cc/BnHfcSZ6/147760849-239309817901605-1043450548925208612-n.jpg",
"https://i.postimg.cc/1zShvk4K/148397965-265506015135263-6666127303063067732-n.jpg",
"https://i.postimg.cc/RhNj39bv/151440924-905005283391308-6139651694459938415-n.jpg",
"https://i.postimg.cc/zfkm6xgY/151733589-103881621671270-3025052287204062202-n.jpg",
"https://i.postimg.cc/3NVzm6Pm/152079814-497232947944825-3963857813177017817-n.jpg",
"https://i.postimg.cc/pT0wXyC0/152130536-2233303836806092-4595166328895080494-n.jpg",
"https://i.postimg.cc/k4XrmWQ6/152502962-305531460917821-3481161210133264831-n.jpg",
"https://i.postimg.cc/SQvBB2JR/152862709-805072493550712-6827940246158073929-n.jpg",
"https://i.postimg.cc/9Fw6Cm7p/153214428-2940635489505020-6238032613878718161-n.jpg",
"https://i.postimg.cc/7ZvpLF1y/153580710-123778339668260-8221404185558265836-n.jpg",
"https://i.postimg.cc/bvpWx1FC/153608557-873080019927093-4620202192811700840-n.jpg",
"https://i.postimg.cc/SstPb3Q3/154157463-134259288504940-8927939592741232607-n.jpg",
"https://i.postimg.cc/bwQ4SmLS/154359072-502282077835244-8761131498836877251-n.jpg",
"https://i.postimg.cc/N0DVpL3g/154736433-181042983517769-2910077056200841723-n.jpg",
"https://i.postimg.cc/MTGL4qw1/154797165-867057977425611-8688919800129861589-n.jpg",
"https://i.postimg.cc/qqh5JwzR/154815241-202596218284426-2700780704580847919-n.jpg",
"https://i.postimg.cc/nrywCmD1/154923745-277960030351806-9098139127866964370-n.jpg",
"https://i.postimg.cc/DfSv4KGW/155073943-1820038758155179-4905634961949023354-n.jpg",
"https://i.postimg.cc/CxgS2BQD/155154379-2803200076560057-917831818639886042-n.jpg",
"https://i.postimg.cc/P5QTnXg7/155526815-115142483928612-2678682579578644430-n.jpg",
"https://i.postimg.cc/RVfvGQX4/155897509-762776571282893-5848100428155002579-n.jpg",
"https://i.postimg.cc/J7S1bd3p/156216824-811131692832693-8614049950842154055-n.jpg",
"https://i.postimg.cc/tgRyq0y4/156608704-258221252451302-9093398973751779479-n.jpg",
"https://i.postimg.cc/yNfKWfYX/156654044-290323229100851-266819125322261807-n.jpg",
"https://i.postimg.cc/G2HCDk40/156891845-4198475886843205-7057792831262167067-n.jpg",
"https://i.postimg.cc/J0XC6M3P/156976783-2872172506436744-583128964773181040-n.jpg",
"https://i.postimg.cc/ydtzykRD/157114066-144330610886672-8659343036100314444-n.jpg",
"https://i.postimg.cc/3r0hJFMm/157382681-244770277329199-5117381424084086191-n.jpg",
"https://i.postimg.cc/dtMY7ZvX/157448929-489496008713227-6918591792726237210-n.jpg",
"https://i.postimg.cc/Ghk1v3mp/157514987-3819847858091065-6612990529450002540-n.jpg",
"https://i.postimg.cc/zG8Y7myF/157651223-922499191898332-6964461184996470299-n.jpg",
"https://i.postimg.cc/kgs3hj83/157651224-945443075995092-203164070362669759-n.jpg",
"https://i.postimg.cc/1zzhxpcg/157692774-200513101864765-847961308805175283-n.jpg",
"https://i.postimg.cc/PqFGdP2S/157759501-251892439923704-7131644102893451759-n.jpg",
"https://i.postimg.cc/gJwCjm7m/157941085-732738590732859-4390687051272205966-n.jpg",
"https://i.postimg.cc/05Sgq5mC/158005159-903201883775333-4977777030409914590-n.jpg",
"https://i.postimg.cc/RFjjn2rf/158730126-797051857827887-5900531111039755098-n.jpg",
"https://i.postimg.cc/5yLD5p1r/158870349-145182430812764-8579665373363812223-n.jpg",
"https://i.postimg.cc/rF2By6N2/158945513-272430564421369-4083894860042833391-n.jpg",
"https://i.postimg.cc/02GLbtVM/159276599-256861149406879-5866537776624626345-n.jpg",
"https://i.postimg.cc/kgnL8xHj/159633352-104950511576920-5772541728195916014-n.jpg",
"https://i.postimg.cc/yNx5p7sc/159950395-719968208601558-4704207928959387844-n.jpg",
"https://i.postimg.cc/tgccL84f/160510833-495825594778603-792077405310592099-n.jpg",
"https://i.postimg.cc/L8NwVJKm/160610437-179404003794877-3415923547456248864-n.jpg",
"https://i.postimg.cc/FRJ6mGfK/160682003-906586070166236-2483231157962035726-n.jpg",
"https://i.postimg.cc/sxdN2SS4/161065357-473046937382105-3835162769677427616-n.jpg",
"https://i.postimg.cc/NF6P2Mkq/164540829-1143646799433915-804090307484554940-n.jpg",
"https://i.postimg.cc/QN1zy4G4/165300638-2547925198842509-6001286711264210531-n.jpg",
"https://i.postimg.cc/kXCH3Q7n/165929506-454812772401091-4848970133061088038-n.jpg",
"https://i.postimg.cc/FsxB9YK0/167014299-1079631422547794-117125633973702322-n.jpg",
"https://i.postimg.cc/K8qpMCBz/167030892-116834493773130-3626917499475683840-n.jpg",
"https://i.postimg.cc/YSvnf8zx/167310363-809517526588130-3246169971716659645-n.jpg",
"https://i.postimg.cc/W1bftsDC/170634106-302723614579302-7388391723337281406-n.jpg",
"https://i.postimg.cc/hGNCCxCR/171394845-451490236144091-6414089047445142263-n.jpg",
"https://i.postimg.cc/j24Zd1RR/171568867-747912009424553-8242780645037904943-n.jpg",
"https://i.postimg.cc/qqT1rrVm/173882039-449630336339193-3465970547074088772-n.jpg",
"https://i.postimg.cc/yd9L2d5g/174159369-448923933036777-7581601139495938541-n.jpg",
"https://i.postimg.cc/WpG9ndgx/174326107-1287349508327448-6615336102131458991-n.jpg",
"https://i.postimg.cc/VLzKHzFv/174353657-470925687584228-3580751813893032647-n.jpg",
"https://i.postimg.cc/vHX3JCPz/174761810-122769723226828-8224770859484197087-n.jpg",
"https://i.postimg.cc/wjv0gFZd/175638910-463193244937061-4504195350882856272-n.jpg",
"https://i.postimg.cc/13jMtw1V/176039804-506901623671218-1749705673432892856-n.jpg",
"https://i.postimg.cc/1txH0St9/176260594-495209041685561-2356429258909084491-n.jpg",
"https://i.postimg.cc/qvSX0r28/178528616-859157324813308-2097777019132824278-n.jpg",
"https://i.postimg.cc/PfQ4DBkj/181188943-784864128832082-7777752569430476791-n.jpg",
"https://i.postimg.cc/fTHf2mLq/181261765-187217643134575-3841721186713397745-n.jpg",
"https://i.postimg.cc/Yq2xzbpm/183270085-225889425537290-2049913696756559601-n.jpg",
"https://i.postimg.cc/gjsHP6KJ/183524569-245526750660559-8202277700911117898-n.jpg",
"https://i.postimg.cc/Bb4ByCHk/183597640-225402145582894-1552335698247082642-n.jpg",
"https://i.postimg.cc/cHQcXzgf/184961104-2845573569014722-8956341560297865634-n.jpg",
"https://i.postimg.cc/g2nqfjLz/189819742-1138860996595259-844610280779501280-n.jpg",
"https://i.postimg.cc/NMw69xJF/190746831-103098161914984-4563446709065680157-n.jpg",
"https://i.postimg.cc/MTbyyjND/190919681-3939064489475953-784880666737317253-n.jpg",
"https://i.postimg.cc/PqDb57M0/191531456-803816383581653-1056786278377101025-n.jpg",
"https://i.postimg.cc/C5hbJxVV/194897720-2235927483215334-2679045135210298189-n.jpg",
"https://i.postimg.cc/SRgCPbyY/195374682-4063454917079863-4392367826016592750-n.jpg",
"https://i.postimg.cc/MZ57HVyZ/195470833-478288510071656-608112755862036048-n.jpg",
"https://i.postimg.cc/wTbDczfS/195694839-5699014710171197-6630988881430870668-n.jpg",
"https://i.postimg.cc/02NpwjfY/195780734-595494018093883-9176495170541595876-n.jpg",
"https://i.postimg.cc/FHd3T6w1/196125760-562939171760343-4201588916413994234-n.jpg",
"https://i.postimg.cc/Dw9sHgK6/198113363-1170936133424268-2593353902029639691-n.jpg",
"https://i.postimg.cc/501zN2yF/198381417-537054894368112-419065554995129625-n.jpg",
"https://i.postimg.cc/pTZF9M5c/198684846-595887988017185-3872386064240385194-n.jpg",
"https://i.postimg.cc/yxp3PhPF/198845103-266044855318867-8217096081379597314-n.jpg",
"https://i.postimg.cc/4yxhV2zf/200891376-481694786249048-6993646621119764251-n.jpg",
"https://i.postimg.cc/xTqzd7fg/202778143-3201457926742697-1164796351408013654-n.jpg",
"https://i.postimg.cc/28JBLw3Y/203765155-208277887813919-6330228189710413538-n.jpg",
"https://i.postimg.cc/DfxGnFT8/203932198-561718478148359-5825164223030453658-n.jpg",
"https://i.postimg.cc/t4xn3xVx/204232470-159708539531974-3099968212334508278-n.jpg",
"https://i.postimg.cc/Dz3JBwqY/211321009-1424866064579429-7443699073444160709-n.jpg",
"https://i.postimg.cc/MG0c4J5Z/212688528-333316818391910-6521901144228356629-n.jpg",
"https://i.postimg.cc/G2q4LP6Z/213266037-1167652483762121-6078223746681359277-n.jpg",
"https://i.postimg.cc/cHsKGkkR/220819077-548005293188414-101509325811392542-n.jpg",
"https://i.postimg.cc/2yt3vkkG/223080100-800316234011987-4633109735346668120-n.jpg",
"https://i.postimg.cc/dt7hFy6x/223438030-1379157739151252-8622178359984865886-n.jpg",
"https://i.postimg.cc/BZ7jRgTF/223663084-251119466569716-3010562106223129764-n.jpg",
"https://i.postimg.cc/nrrCCjJM/224175576-849006192702995-7651505237322082814-n.jpg",
"https://i.postimg.cc/vHpcZZSH/232122052-659439408272832-8096828038520336756-n.jpg",
"https://i.postimg.cc/P5YNpnBb/232543617-147022234240290-6513464710732845525-n.jpg",
"https://i.postimg.cc/YSx9Rf2h/233948991-573992500644153-6920046160199274218-n.jpg",
"https://i.postimg.cc/g0pj3BWC/233974122-189582526559115-3904927825024027437-n.jpg",
"https://i.postimg.cc/85PC0Jsw/234144238-872705680263111-1986392174602036817-n.jpg",
"https://i.postimg.cc/V6GNQfCw/234554887-346413120286267-749902669031454767-n.jpg",
"https://i.postimg.cc/d3hVJb2y/238618639-2806634472944862-2289502662221638561-n.jpg",
"https://i.postimg.cc/Xqt7qsLD/239892049-945337026014903-2581557453416775555-n.jpg",
"https://i.postimg.cc/fbt2jJTS/46556924-132956924265503-5224956413039066594-n.jpg",
"https://i.postimg.cc/R0kPP4Ns/46557221-635159680235662-2240124444627148326-n.jpg",
"https://i.postimg.cc/hvg2Bs8V/46597959-2171906826434037-3849722561505756936-n.jpg",
"https://i.postimg.cc/yxPvYRnt/46751800-2198978790377369-6537323765754077160-n.jpg",
"https://i.postimg.cc/NfsdCNjc/46756717-219928142252623-6731759940751044090-n.jpg",
"https://i.postimg.cc/FH1DN7SC/46964050-2024701184264396-2206241451337686055-n.jpg",
"https://i.postimg.cc/L6xNczJZ/47151025-1152248261615102-8713722926174059490-n.jpg",
"https://i.postimg.cc/W305CCZ2/47310367-1961416477495985-6574008485614781256-n.jpg",
"https://i.postimg.cc/T2qk98G0/47312841-348388545893161-1641211421030614690-n.jpg",
"https://i.postimg.cc/k5bsRzfx/47325591-617178285406961-1199322441145347473-n.jpg",
"https://i.postimg.cc/qRcGjnfq/47348752-2038045603160684-4319750358037557104-n.jpg",
"https://i.postimg.cc/tJXNfTy5/47440298-326862528164476-4849713723839781364-n.jpg",
"https://i.postimg.cc/G2nQFK56/47483971-276112226393679-7304535381752296627-n.jpg",
"https://i.postimg.cc/XN885wcD/47583910-1901373713307245-4407946339073793372-n.jpg",
"https://i.postimg.cc/mk8yGsgG/47583961-589683404802905-1917769745103670203-n.jpg",
"https://i.postimg.cc/wT4QfgrX/47584526-587728148333334-7424082192459185322-n.jpg",
"https://i.postimg.cc/BQnCBXmZ/47585249-225576661716742-8100895883035365876-n.jpg",
"https://i.postimg.cc/9Q4tss3v/47585494-146293193027470-6609294234233465257-n.jpg",
"https://i.postimg.cc/wjSczFg3/47586225-2105056759806491-2861015423850575815-n.jpg",
"https://i.postimg.cc/fbm7RXRC/47689743-255687872027012-31362075031651742-n.jpg",
"https://i.postimg.cc/xCQvJCk2/47689967-133893757629840-1284271155630360909-n.jpg",
"https://i.postimg.cc/yxQcbyL1/47690567-523825221447832-3997388317863597286-n.jpg",
"https://i.postimg.cc/PJr1yRzV/47691654-226423148263418-7751077988242791866-n.jpg",
"https://i.postimg.cc/bJRQQhb2/47691976-505422209979112-8449116783499163327-n.jpg",
"https://i.postimg.cc/7Pm3hqwF/47692310-393495141399102-1193091958334407258-n.jpg",
"https://i.postimg.cc/tgQPwTNx/47692745-141126150224645-1939283040088004923-n.jpg",
"https://i.postimg.cc/25QvDD0X/47692907-803591029983367-5916239165235457043-n.jpg",
"https://i.postimg.cc/QxCpWvMH/47693160-129880001377692-6964302497191999633-n.jpg",
"https://i.postimg.cc/KzmTcHVc/47693961-1370388283102495-8633686649094313283-n.jpg",
"https://i.postimg.cc/t4VWBPWb/47694033-589571458155397-2999234344638465988-n.jpg",
"https://i.postimg.cc/j5v7Dh0H/49299911-467674053764776-5202215579200954947-n.jpg",
"https://i.postimg.cc/hvj7T7cH/49303392-359773804816981-4586719993001659681-n.jpg",
"https://i.postimg.cc/fyrSKTbk/49372081-368617740662832-1778431372444820635-n.jpg",
"https://i.postimg.cc/m2KF1Dq5/49608695-295880361273633-6423177188007833384-n.jpg",
"https://i.postimg.cc/GmYTFRnh/49660317-396269254480720-6749013960441178389-n.jpg",
"https://i.postimg.cc/GpC8zfbP/49663055-2237815906248634-3075530554407326211-n.jpg",
"https://i.postimg.cc/KYDKW5Y6/49679201-238418567055259-5554134026561599132-n.jpg",
"https://i.postimg.cc/wvxtYsy7/49778267-766808363691616-379470363376376720-n.jpg",
"https://i.postimg.cc/2yM3WcHZ/49811127-2305105336390867-8284627928527819980-n.jpg",
"https://i.postimg.cc/pT0mWXzk/49858415-2339431993009821-3661756529889414686-n.jpg",
"https://i.postimg.cc/7PW5jhxZ/49907001-394450884432353-7739834971992525064-n.jpg",
"https://i.postimg.cc/90rrr5B2/49933667-398702957603033-6917099772861865193-n.jpg",
"https://i.postimg.cc/02KzvvQd/50068003-973655062831950-6974664351431871931-n.jpg",
"https://i.postimg.cc/dVMLtfZM/50076018-281785496029909-6316704915727246689-n.jpg",
"https://i.postimg.cc/1zsXDNKJ/50258966-982591178617055-3560545553347353783-n.jpg",
"https://i.postimg.cc/wB2v2TfH/50488026-132714854424787-1068515754724265922-n.jpg",
"https://i.postimg.cc/3RbwMfQc/50520801-788107804867489-7328092821292779999-n.jpg",
"https://i.postimg.cc/4d33Skqc/50566601-2226098330996574-8455309681425453622-n.jpg",
"https://i.postimg.cc/WpC4XynD/51353075-297092074260223-3794339454686515857-n.jpg",
"https://i.postimg.cc/13p4gKD8/51442667-576844536124146-1794995856404183334-n.jpg",
"https://i.postimg.cc/zG1G1R48/51576620-1244510039038077-4937956218677335315-n.jpg",
"https://i.postimg.cc/90RQcPWF/51742130-179023446418667-2325434015087653439-n.jpg",
"https://i.postimg.cc/x8wT8kCG/51770886-308098373224936-1173127272351400683-n.jpg",
"https://i.postimg.cc/fRjTWRhX/51815112-929202257253278-6756002334873144656-n.jpg",
"https://i.postimg.cc/MG6ZnJWL/51912048-1052284698289409-3101355305562453534-n.jpg",
"https://i.postimg.cc/SN9x5GTg/51962018-316391952558878-4878470814221127786-n.jpg",
"https://i.postimg.cc/q71JnDqv/52038654-374181083402549-2194030173816244556-n.jpg",
"https://i.postimg.cc/xCq0PGNy/52280215-2213054519010621-7839858856931764090-n.jpg",
"https://i.postimg.cc/fy9DGwKV/52797618-992269560966573-1192485785979920690-n.jpg",
"https://i.postimg.cc/XJhn1ZwM/52912691-831021257238070-6881436942410073774-n.jpg",
"https://i.postimg.cc/yWCsBwQv/52948784-2592682560773258-6098312947143376161-n.jpg",
"https://i.postimg.cc/L4c1n5G0/53109542-553186521855178-187184850040226665-n.jpg",
"https://i.postimg.cc/J4jBJmL7/53109565-365981264257107-5549971756848066668-n.jpg",
"https://i.postimg.cc/2SmL7JkQ/53123372-781786052221389-6489326085007731437-n.jpg",
"https://i.postimg.cc/BZLFSH7K/53395630-374546983143826-4737629309786506720-n.jpg",
"https://i.postimg.cc/YC3Gn30J/53402135-121010252327889-3443479603622016258-n.jpg",
"https://i.postimg.cc/SK1XqxWd/53548719-298820347453505-2622030435094330725-n.jpg",
"https://i.postimg.cc/bvwGKt2d/53630755-368625770659039-936807600940297094-n.jpg",
"https://i.postimg.cc/0Q6zN1ns/53666441-266429720977901-5034004614935975960-n.jpg",
"https://i.postimg.cc/9MvrRggq/54446482-669756056788709-672954285289828893-n.jpg",
"https://i.postimg.cc/QC1VpgvY/54511499-114728083041959-4500172272649184508-n.jpg",
"https://i.postimg.cc/DfXWkFmQ/54512815-415081575923356-2488096665899911521-n.jpg",
"https://i.postimg.cc/021z93JT/54732457-139898437055928-5424931194636931114-n.jpg",
"https://i.postimg.cc/fT7JyKcJ/55829773-1500888966713834-7826914953686005625-n.jpg",
"https://i.postimg.cc/DwB0dwYh/55886207-560563944455786-619724006543730241-n.jpg",
"https://i.postimg.cc/Gmc9yyKz/55910197-188686118777896-3029285453816780130-n.jpg",
"https://i.postimg.cc/0QJNsd55/55957876-283416915882966-2353934466410796204-n.jpg",
"https://i.postimg.cc/JhFhvdLd/55961998-110380456662767-7760652216881542352-n.jpg",
"https://i.postimg.cc/PJs5rpNW/57221570-142805683438825-2632235334687331562-n.jpg",
"https://i.postimg.cc/D0ryWvbt/57506102-1243203062501864-7499737377783125092-n.jpg",
"https://i.postimg.cc/qBy7DLZj/57853179-135117674267057-4571402543412344270-n.jpg",
"https://i.postimg.cc/zGXXB1Dc/58454205-441544006620979-5308133409344672993-n.jpg",
"https://i.postimg.cc/0yW5KHb2/58733179-2328155500773121-8204400160278918957-n.jpg",
"https://i.postimg.cc/ZKm5GdGZ/59363182-2146771898725298-7475867144846472337-n.jpg",
"https://i.postimg.cc/4N1xs3Gc/59421200-911438022536354-5562426966294055836-n.jpg",
"https://i.postimg.cc/nLNH0j4y/60166548-320351688634479-7289556098785622716-n.jpg",
"https://i.postimg.cc/DZs7Dv58/60257530-2259038551012125-384830353667098156-n.jpg",
"https://i.postimg.cc/d3YJcbSn/60868490-185101472485823-2052083769211420081-n.jpg",
"https://i.postimg.cc/br9pym7P/61012026-1195542503940145-2437267415420732263-n.jpg",
"https://i.postimg.cc/CMGFsKz2/61706224-473046310114587-4642641063986880773-n.jpg",
"https://i.postimg.cc/YqttnwFC/61998630-419567628598555-1191837901154794967-n.jpg",
"https://i.postimg.cc/sDKsb0P9/62016556-2400075890271643-5035179784317878654-n.jpg",
"https://i.postimg.cc/bwJpPH3X/62078838-384958169033470-7080248723291810782-n.jpg",
"https://i.postimg.cc/XYz3YGzr/62135618-117396129510926-3063306837854235941-n.jpg",
"https://i.postimg.cc/9fw2Rm6J/62437603-144625229957073-82219332310769179-n.jpg",
"https://i.postimg.cc/d1MY8Mvv/64676397-457555325084676-544724971907617834-n.jpg",
"https://i.postimg.cc/1tpZBW5F/65291656-2343297019273183-8564032307004184654-n.jpg",
"https://i.postimg.cc/Xq46zwpz/65541762-432294400688451-116500436682665639-n.jpg",
"https://i.postimg.cc/fyCQnJdT/65772108-452204058955211-5046637117550950478-n.jpg",
"https://i.postimg.cc/L43pZ0WK/65830841-364358954246063-6121344361746587480-n.jpg",
"https://i.postimg.cc/X7N0KkMZ/65950973-1347837088727271-3238121236758217980-n.jpg",
"https://i.postimg.cc/NfNvd2Yd/66075290-519562102204792-2960453366023526135-n.jpg",
"https://i.postimg.cc/cCX2kPqv/66080982-118973626067286-3860717687113126507-n.jpg",
"https://i.postimg.cc/qvzVSBv4/66093218-362083131159564-5818333904959852902-n.jpg",
"https://i.postimg.cc/xdmrjsmZ/66220508-486094452194168-7796210166886643423-n.jpg",
"https://i.postimg.cc/1X9bHsdx/66245311-233172747640096-891116248024497613-n.jpg",
"https://i.postimg.cc/JzvVLwsJ/66312952-1144800912359455-2655578723363963035-n.jpg",
"https://i.postimg.cc/MT0hVvdb/66364785-2233148066807232-8378550524310840025-n.jpg",
"https://i.postimg.cc/W3cBdM61/66472251-2391075827794966-4849949251629249383-n.jpg",
"https://i.postimg.cc/rFwvRyWx/66686137-389431421765326-3227021202576283036-n.jpg",
"https://i.postimg.cc/rFZ716Cb/67025837-699046727205324-4841990953830353689-n.jpg",
"https://i.postimg.cc/8kH2CfFT/67293791-936586076682039-7760414010483329830-n.jpg",
"https://i.postimg.cc/W1DCS954/67445545-128570478432699-4894064455285663398-n.jpg",
"https://i.postimg.cc/52ZGrwrS/67477702-650678528787251-2563805335787630152-n.jpg",
"https://i.postimg.cc/cJwjGvyy/67780050-360067201543565-2503250769475761688-n.jpg",
"https://i.postimg.cc/MTwL6zqc/68862404-491196025032697-3422249109242742803-n.jpg",
"https://i.postimg.cc/xCP4qB16/69121011-1059712747551614-7216644169852428881-n.jpg",
"https://i.postimg.cc/c1XzWqjH/69271935-561495734680339-6720832188539372335-n.jpg",
"https://i.postimg.cc/sxD0WKBs/69668190-899908797058183-7290907439134870515-n.jpg",
"https://i.postimg.cc/2yc97vvv/69687809-389675921722299-1349000075590124447-n.jpg",
"https://i.postimg.cc/hPY3JLKR/69786259-111131863439353-6185877371227939860-n.jpg",
"https://i.postimg.cc/HLDZzTJS/70521306-380471615967330-3404168406305237528-n.jpg",
"https://i.postimg.cc/Yq0sqnKx/70591355-2681627515190067-5686287140782468793-n.jpg",
"https://i.postimg.cc/QdWYcFM9/70656938-253882332182188-5165975439858765248-n.jpg",
"https://i.postimg.cc/d02WSgrJ/71091160-2341030569495305-6440982470300556114-n.jpg",
"https://i.postimg.cc/LXvxmfx7/71111138-739276099874551-7769449546197313891-n.jpg",
"https://i.postimg.cc/Y09b09VS/71196189-711976225949326-8879338789122898471-n.jpg",
"https://i.postimg.cc/4dX8CwQV/71730459-518807722274100-1792065043726700896-n.jpg",
"https://i.postimg.cc/66jMSr24/72074980-409531649736322-2110059259784258886-n.jpg",
"https://i.postimg.cc/L5bv1SK3/72215457-413790549518837-815241984429706574-n.jpg",
"https://i.postimg.cc/g0WsR45Q/72308399-194437144936496-3435890343339834140-n.jpg",
"https://i.postimg.cc/ncX3tXBR/72321904-2483595635231543-6158432494290848815-n.jpg",
"https://i.postimg.cc/15bJRyK9/72364769-540608723370703-7402860090598736617-n.jpg",
"https://i.postimg.cc/x1HgcBsL/72483905-451606402368445-7539684597632176262-n.jpg",
"https://i.postimg.cc/Tw2cN1Tc/72753886-170057937430249-4528809836454140276-n.jpg",
"https://i.postimg.cc/RFPLkmFx/72846963-1171845693202982-846735295963629895-n.jpg",
"https://i.postimg.cc/7hfnDRGG/73141838-970626546648336-7266593035159211783-n.jpg",
"https://i.postimg.cc/RhyQ0TKP/73521723-168765510865818-4205901337514962035-n.jpg",
"https://i.postimg.cc/Ls3TVLFX/73533210-443343623243159-8711369354091143933-n.jpg",
"https://i.postimg.cc/Y2sx8tZ1/75225528-188739958838307-7684884878202883343-n.jpg",
"https://i.postimg.cc/c4tBbVGP/75296746-171515810885641-8255393051616221149-n.jpg",
"https://i.postimg.cc/9Q3Y5JW0/75322211-158746418822316-7781726547152065526-n.jpg",
"https://i.postimg.cc/W1M62g3n/75388586-739092656586182-2543523048448324999-n.jpg",
"https://i.postimg.cc/YSMNj0Lw/75397698-2552510068315415-983775248430524364-n.jpg",
"https://i.postimg.cc/R0d7tmwJ/75403220-164849351390388-5490399465260745007-n.jpg",
"https://i.postimg.cc/sX2p9LJ6/75441004-149813182972619-8753700432307148558-n.jpg",
"https://i.postimg.cc/brDk42W1/75467934-157084458942514-6080797036162688606-n.jpg",
"https://i.postimg.cc/T1zgx3vF/75484602-433721287581955-202698815965953395-n.jpg",
"https://i.postimg.cc/L4wzLNgD/75571713-111378403520156-6530581713438521934-n.jpg",
"https://i.postimg.cc/pXjKZzDH/76855317-300638297550210-5071212020124030536-n.jpg",
"https://i.postimg.cc/dVKrS3BT/76887269-188139778962468-6556703299703285244-n.jpg",
"https://i.postimg.cc/T3qg8x7N/78763214-151444072809495-1320649186597901657-n.jpg",
"https://i.postimg.cc/jjMf5Xrz/78790347-667401733792588-7756150607591272861-n.jpg",
"https://i.postimg.cc/0QrwJw8h/78905115-208954563468361-7638929593248516448-n.jpg",
"https://i.postimg.cc/26JBdSyy/79034573-437899613554940-7424068858746049628-n.jpg",
"https://i.postimg.cc/HLY5dNFY/79036337-1263228990532699-4022425895347504151-n.jpg",
"https://i.postimg.cc/YjBGVD1w/79155655-158945742061989-812965149703716101-n.jpg",
"https://i.postimg.cc/MZv4m6dS/79205946-2397937273666789-8756699114759131665-n.jpg",
"https://i.postimg.cc/7h2JKrJV/79223769-436098577063507-1777901674913989753-n.jpg",
"https://i.postimg.cc/1R2dWkjN/79233144-757460928080318-2164263722092552683-n.jpg",
"https://i.postimg.cc/9Qjn2GVm/79242648-1223019284548370-586566853866795927-n.jpg",
"https://i.postimg.cc/jSQkSLdz/79253286-168404044404947-8053362964410428372-n.jpg",
"https://i.postimg.cc/ZqbsB4CX/79374444-826256744489764-3880349071309404273-n.jpg",
"https://i.postimg.cc/YSdnQZF0/79603103-179632816763467-4182694365459809411-n.jpg",
"https://i.postimg.cc/0QrtnnGf/79772856-1568524669979832-5925051299895196587-n.jpg",
"https://i.postimg.cc/C5qcTKQn/79826887-532906540645032-5464074789491622807-n.jpg",
"https://i.postimg.cc/PxcSRD2k/80384877-122044725938737-2962032881959408837-n.jpg",
"https://i.postimg.cc/kM61tjgM/80562781-805516159929695-5913148675818445337-n.jpg",
"https://i.postimg.cc/44D8vzY6/80602123-1045210509147408-2037198328096763753-n.jpg",
"https://i.postimg.cc/SNcggJ9w/81038959-609109399887497-1246141309755403116-n.jpg",
"https://i.postimg.cc/t4y2wpt7/81232518-123008145537715-9118371594138110278-n.jpg",
"https://i.postimg.cc/Gpmz3KfC/81299244-101692461334405-7028277744828291290-n.jpg",
"https://i.postimg.cc/FKCpYctJ/81323258-658110364824929-3899932571896981085-n.jpg",
"https://i.postimg.cc/6p0YNgYc/82149767-461001071473528-9104114506910856326-n.jpg",
"https://i.postimg.cc/mD0SwsgL/82153365-207981716896638-7303371226276430475-n.jpg",
"https://i.postimg.cc/85FHM5DX/82314947-1129936897351946-2768160905634675289-n.jpg",
"https://i.postimg.cc/brk9VBZQ/83484893-2919931308058958-1136905102918041346-n.jpg",
"https://i.postimg.cc/jq7cjLML/85125025-252365995753144-4310768141753686264-n.jpg",
"https://i.postimg.cc/BQfgP4zN/85152244-802881043528334-3475230218252202821-n.jpg",
"https://i.postimg.cc/BnqBNN4K/87208076-880809712342278-5880152585095981533-n.jpg",
"https://i.postimg.cc/jd6hzB0T/87212156-4066090160071664-5256539676543176640-n.jpg",
"https://i.postimg.cc/sgw9LSg0/87561538-2574547276132149-5712985869540449631-n.jpg",
"https://i.postimg.cc/yNGh1H9m/87587569-198483511472719-122933505856786569-n.jpg",
"https://i.postimg.cc/tgJtGT1R/88915413-136861097699514-6859109707682123063-n.jpg",
"https://i.postimg.cc/cCyQ3BF6/91255297-249156956241425-6719883867278509267-n.jpg",
"https://i.postimg.cc/59L5VDtz/91262240-215678486309477-4748218037562471601-n.jpg",
"https://i.postimg.cc/6qrCf4Pc/91861527-551197718856400-3672357980892808659-n.jpg",
"https://i.postimg.cc/GhjkBYGh/97110117-674460553339285-6286421683207515883-n.jpg",

  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`IG : AusandBarthez`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };