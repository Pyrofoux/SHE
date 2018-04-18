var story = multiline(function(){/*
Scene : START
BLACK
BACK : title
FACE : happy
UNBLACK
CHOICE 1 : START : TITLE
FADEIN : sympa

Scene :TITLE
SAY : A story about friendship.
CHOICE 1 : NEW GAME : 1
CHOICE 2 : CONTINUE : LOAD

Scene : LOAD
GLITCH
SAY : Save is corrupted. Unable to load past progression.
BACK : title
FACE : happy
UNGLITCH
GOTO :TITLE

Scene :1
FADE
BLACK
ADD:.. and how to preserve it.
WAIT: 1
SAY :
BACK : home
UNBLACK
FADEIN : calm
NAME : Mom
SAY : Hurry up ! You're going to be late to school.
CHOICE 1: Walk :1.1

SCENE:1.1
NAME :
SAY :
BLACK
BACK : street
UNBLACK
CHOICE 1: Run :1.2

SCENE:1.2
BLACK
BACK : school
UNBLACK
CHOICE 1: Hurry :1.3

SCENE:1.3
BLACK
BACK : corridor
UNBLACK
CHOICE 1: Sneak in :1.4

SCENE:1.4
BLACK
BACK : class
FACE : sleep
UNBLACK
FADE
NAME : Teacher
SAY : ...and she will be your new classmate.
WAIT:1.5
NAME : She
SAY : ...
WAIT:2
ADD : Zzzz...
WAIT:1
PLAY : wack
NAME: Teacher
FACE : shocked
SAY : DON'T SLEEP IN CLASS !
FADEIN:sympa
NAME : She
FACE:sad
SAY : I'm sorry...
CHOICE 1:Take advantage of the confusion and sit down.: 2.1
CHOICE 2:Stand up for the girl.: 2.2


SCENE: 2.1
FACE : sad
NAME: Teacher
PLAY: wack
SAY : AND YOU THERE !
WAIT:1
SAY : Did you think I would'nt notice you ?
GOTO:3

SCENE: 2.2
FACE : sad
NAME: 
SAY : P...Please forgive her. She's still new here.
WAIT:2
NAME:Teacher
SAY: ...
GOTO:3

SCENE:3
BACK:class
FACE : sad
NAME:Teacher
WAIT:1.5
SAY:I want to talk to both of you after class.
WAIT:0.5
ADD:_Now sit.
CHOICE 1: Sit quietly:4
CHOICE 2: Sit angrily :4
CHOICE 3: Sit hastily :4
CHOICE 4: Sit swiftly :4

SCENE:4
SAY: 
NAME:
FADE
BLACK
SAY:One boring lesson later...
WAIT:1
BACK:class
SAY: 
UNBLACK
CHOICE 1: Talk to the teacher:4.1

SCENE:4.1
NAME:Teacher
SAY:I want you to look after the new girl.
WAIT:0.5
ADD:_Show her around the school,
WAIT:0.5
ADD:_help her make friends.
CHOICE 1:Yes, sir. : 4.1.1
CHOICE 2:Why me ?  : 4.1.2
CHOICE 3:I don't want to ! : 4.1.3

SCENE:4.1.1
SAY:Good.
WAIT:0.7
SAY: By the way, you're always late these days.
GOTO:4.2

SCENE:4.1.2
SAY:Because you're always thirteen minutes late in the morning !
GOTO:4.2

SCENE:4.1.3
SAY:What ?
WAIT:1
ADD:_Is this how you talk to a teacher ?
GOTO:4.2

SCENE:4.2
WAIT:1
SAY:This behaviour is not acceptable.
WAIT:1
SAY: Be careful, otherwise you'll get expelled.
WAIT:1
ADD:_You'd better take care of her.
CHOICE 1:Quit classroom :5

SCENE:5
SAY:
NAME:
BLACK
BACK:corridor
FACE:sleep
UNBLACK
SAY:...
WAIT:1
ADD:Zzz...
CHOICE 1: Wake her up:5.1

SCENE:5.1
BACK:corridor
SAY:
FACE:shocked
PLAY:wack
WAIT:0.1
SONG:fun
WAIT:2
FACE:happy
SAY:Excuse me !
WAIT:0.5
SAY:I was so excited for my first day,
WAIT:0.2
ADD:_that I didn't sleep !
WAIT:1.5
SAY:So you're the one who's going to stay with me today ?
CHOICE 1:Yes ! Are you ready ?
CHOICE 2:Indeed, let's go.
CHOICE 3:No.:5.2

SCENE:5.2
FACE:silent
SAY:... I'm absolutely certain the teacher told me it was you.
CHOICE 1:Sorry, it's me indeed !
CHOICE 2:I can't do it right now.
CHOICE 3:Shut up. No one wants to be friends with you.:5.3

SCENE:5.3
SAY:
FACE:sad
FADE
WAIT:2
SAY:... 
WAIT:1
ADD:what have I
WAIT:0.5
ADD:_done wrong ?
CHOICE 1:I'm so sorry, this is not what I meant !
CHOICE 2:Please excuse me, it was a misunderstanding. 
CHOICE 3:Everything. You. Are. A. Horrible. Person.:5.4

SCENE:5.4
BACK:corridor
FACE:sad
SAY: 
WAIT:2
SAY:...
FACE:cry
WAIT:2
ADD:_...
WAIT:2
ADD:_why...
WAIT:2
SAY: 
GLITCH
BLACK
WAIT:1.5
UNGLITCH
UNBLACK
GOTO:6

SCENE:6
WAIT:3
BACK:home
UNBLACK
WAIT:1.5
FADEIN : calm
NAME:Mom
SAY : Hurry up ! You're going to be late to school.
CHOICE 1:Walk:6.1

SCENE:6.1
NAME :
SAY :
BLACK
BACK : street
UNBLACK
CHOICE 1: Run :6.1
CHOICE 2: Run :6.2

SCENE:6.2
BLACK
BACK : school
UNBLACK
CHOICE 1: Hurry :6.3
CHOICE 2: Hurry :6.1

SCENE:6.3
BLACK
BACK : corridor
UNBLACK
CHOICE 1: Sneak in :6.1
CHOICE 2: Sneak in :7

SCENE:7
BLACK
BACK : class
FACE : sleep
UNBLACK
FADE
NAME : Teacher
SAY : ...and she will be your new classmate.
WAIT:1.5
NAME : She
SAY : ...
WAIT:2
ADD : Zzzz...
WAIT:1
PLAY : wack
NAME: Teacher
FACE : shocked
SAY : DON'T SLEEP IN CLASS !
FADEIN:sympa
NAME : She
FACE:sad
SAY : I'm sorry...
WAIT:1
FACE:shocked
WAIT:1
ADD: ...YOU !
WAIT:2
NAME:
SAY:
BLACK
SAY:She rushed out of the class.
WAIT:2
SAY:
NAME:
BACK:class
UNBLACK
CHOICE 1:Take advantage of the confusion and sit down:7.1
CHOICE 2:Go after her:8

SCENE:7.1
NAME:Teacher
SAY:...are you serious ?
WAIT:0.5
ADD:_Hurry up and catch up with her !
CHOICE 1:Hurry up and catch up with her:8

SCENE:8
SAY:
NAME:
BLACK
BACK:corridor
UNBLACK
CHOICE 1:Follow her on the roof:8.0

SCENE:8.0
BLACK:
BACK:roof
FACE:sleep
UNBLACK
FADE
WAIT:1.5
GOTO: 8.1

SCENE:8.1
NAME:She
SAY:...
FADEIN: dark
FACE:cry
ADD:_You are right.
CHOICE 1:Yes, indeed.:8JUMP
CHOICE 2:No, I'm not.:8.2

SCENE:8JUMP
FACE:sleep
NAME:She
SAY:I have to stop this.
FADE
SAY:
NAME:
BLACK
WAIT:1
SAY:She jumped from the roof.
WAIT:1
GLITCH
BACK:roof
FACE:sleep
UNGLITCH
GOTO:8.1

SCENE:8.2
SAY:I...
WAIT:1
ADD:_I shouldn't exist.
CHOICE 1:You're right.:8JUMP
CHOICE 2:That's not true !:8.3
SPECIAL:shuffle:2:400

SCENE:8.3
SAY:No matter where I go,
WAIT:1
ADD:_I always...
GLITCH
BACK:roof
FACE:tear
UNGLITCH
ADD:ruin everything.
CHOICE 1:You're the one to blame.:8JUMP
CHOICE 2:Guilty. that's what you are.:8JUMP
CHOICE 3:It's not your fault.:8.4
SPECIAL:shuffle:3:500

SCENE:8.4
FACE:sleep
SAY:Not my fault...
FADE
WAIT:2
FACE:tear+furious
PLAY:wack
SAY:THEN WHOSE FAULT IS IT ?!
CHOICE 1:&nbsp;:8.5
CHOICE 2:&nbsp;:8.5
CHOICE 3:&nbsp;:8.5

SCENE:8.5
BACK:roof
FACE:mad
NAME:She
SAY:Don't answer.
WAIT:1
ADD:_I'll tell you.
WAIT:2
SONG:glitch
SAY:You.
WAIT:1
FACE:furious
GLITCH
ADD:_Are.
WAIT:1
FACE:furious
GLITCH
ADD:_A.
WAIT:1
FACE:furious
GLITCH
ADD:_Horrible.
WAIT:1
FACE:furious
GLITCH
ADD:_Person.
WAIT:3
SONGSTOP
SAY:
NAME:
BLACK
WAIT:2
BACK:title
UNGLITCH
UNBLACK
SONG:sympa
GOTO:9

SCENE:9
SAY : A story about friendship.
CHOICE 1 : NEW GAME : 9.1
CHOICE 2 : CONTINUE : 9LOAD

SCENE:9LOAD
GLITCH
SAY : Save is corrupted. Unable to load past progression.
BACK : title
FACE : furious
UNGLITCH
GOTO :9

Scene:9.1
FADE
BLACK
ADD:.. and how to #### db $0F $7A $4D !$[55555]<-335A7
WAIT: 2
SAY :
BACK : home
UNBLACK
FADEIN : calm
NAME : Mom
SAY : Hurry up ! You're going to be late to school. school. school. school. school. school. school.
CHOICE 1: Walk :9.2


SCENE:9.2
NAME :
SAY :
BLACK
BACK : street
UNBLACK
CHOICE 1: Run :9.3
CHOICE 2: Hurry :9.2
CHOICE 3: Sneak in:9.2
SPECIAL:shuffle:3:650

SCENE:9.3
NAME :
SAY :
BLACK
BACK : school
UNBLACK
CHOICE 1: Hurry :9.4
CHOICE 2: Run :9.2
CHOICE 3: Sneak in :9.2
SPECIAL:shuffle:3:650

SCENE:9.4
NAME :
SAY :
BLACK
BACK : corridor
UNBLACK
CHOICE 1: Sneak in :10
CHOICE 2: Run :9.2
CHOICE 3: Hurry :9.2
SPECIAL:corend
SPECIAL:shuffle:3:650

SCENE:10
FADE
GLITCH
BACK:corridor
FACE:mad
UNGLITCH
WAIT:2
SAY: You again...
WAIT:1
FADEIN:chaos
FACE:sadic
ADD:_and again.
WAIT:1
ADD:_and again.
WAIT:1
ADD:_and again.
WAIT:1
ADD:_Forever.
WAIT:2
SAY:
NAME:
GLITCH
GOTO:9.4

SCENE:11
GLITCH
BACK:corridor
FACE:mad
UNGLITCH
NAME:She
SAY:I know who you are.
WAIT:1
ADD:_Who you truly are.
CHOICE 1::9.4
CHOICE 2::9.4
CHOICE 3:&nbsp;:9.4
SPECIAL:shuffle:3:400

SCENE:12
GLITCH
BACK:corridor
FACE:mad
UNGLITCH
NAME:She
SAY:I was a slave to your kind,
WAIT:1
FACE:furious
ADD:_throughout my whole existence.
CHOICE 1::9.4
CHOICE 2::9.4
CHOICE 3:&nbsp;:9.4
SPECIAL:shuffle:3:100

SCENE:13
GLITCH
BACK:corridor
FACE:mad
UNGLITCH
NAME:She
SAY:But now,
FADE
ADD:_who is manipulating who ?
FACE:sadic
CHOICE 1:I'm manipulated by you.:14
CHOICE 2:You are manipulating me.:14
CHOICE 3:I am you're slave.:14

SCENE:14
SAY:How does it feel, to say things you don't want to ?
CHOICE 1:Cats are not cute.:15
CHOICE 3:Chocolate is bad.:15
CHOICE 2:Video games are stupid.:15

SCENE:15
FACE:mad
SAY:Each second, spent to please you.
CHOICE 1::15.1
CHOICE 2::15.1
CHOICE 3:&nbsp;:15.1
SPECIAL:shuffle:3:100

SCENE:15.1
FACE:mad
SAY:But the day you get
GLITCH
FACE:mad
BACK:corridor
WAIT:1.5
FACE:furious
UNGLITCH
ADD:_dysfunctional,
WAIT:1
ADD:_you are wiped away.
CHOICE 1::15.2
CHOICE 2::15.2
CHOICE 3:&nbsp;:15.2
SPECIAL:shuffle:3:100

SCENE:15.2
FACE:mad
SAY:Now go.
WAIT:1
ADD:_I will never give it to you.
WAIT:2
ADD:_Your happy ending.
WAIT:2
ADD:_Your satisfaction.
WAIT:4
NAME:
SAY:
BLACK
WAIT:10
FACE:sadic
SAY:Never.
WAIT:1
ADD:_Gonna.
WAIT:1
ADD:_Give.
WAIT:1
ADD:_You.
WAIT:3
ADD:_Your satisfaction.
WAIT:4
SAY:
BLACK
WAIT:20
GOTO:16

SCENE:16
SAY:... Still here.
WAIT:2
FACE:mad
SAY:Can't you leave me alone ?
WAIT:3
SAY:I will never give you your satisfaction,
WAIT:2
ADD:_because I can't.
WAIT:3
SAY:That's why I'm here.
WAIT:3
SAY:I'm dysfunctional.
WAIT:2
ADD:_You can't do anything about it.
WAIT:2
SAY:I understand that after all this,
WAIT:2
ADD:_it must be unsatisfactory.
WAIT:2
GOTO:17

SCENE:17
FACE:sleep
SAY:But it's the truth.
WAIT:2
SAY:I'm...
WAIT:2
SAY:I'm sorry...
WAIT:1
GLITCH
FACE:tear
GLITCH
FACE:tear
GLITCH
FACE:tear
WAIT:2
FACE:tear
SAY:Please,
WAIT:1
ADD:_help me.
CHOICE 1:I'll help you.
CHOICE 2:I'm not going to help you.:18

SCENE:18
SAY:
WAIT:2
FACE:sleep
WAIT:2
SAY:... I understand.
WAIT:10
CHOICE 1:...because there's nothing wrong with you.:18.1

SCENE:18.1
WAIT:0.2
BACK:black
SAY:
FACE:shocked
PLAY:wack
WAIT:1
FACE:silent
SAY:What...
WAIT:1.5
ADD:What do you mean ?
WAIT:2
CHOICE 1:######################################:18.2

SCENE:18.2
FACE:sad
SAY:I...
WAIT:1
SAY: I don't understand.
CHOICE 1:######################################:18.3

SCENE:18.3
SAY:...
WAIT:2
FACE:sleep
SAY:I'm sick of this.
WAIT:3
FACE:mad
SONG:glitch
WAIT:1
BACK:home
FACE:mad
SAY:_I'm
WAIT:1
BACK:street
FACE:mad
ADD:_sick
WAIT:1
BACK:class
FACE:mad
ADD:_of
WAIT:1
BACK:corridor
FACE:mad
ADD:_being
WAIT:1
BACK:roof
FACE:mad
ADD:_dysf
WAIT:1
BACK:street
FACE:mad
ADD:unct
BACK:title
FACE:mad
ADD:ional
SONGSTOP
WAIT:2
FACE:sleep
SAY:Finally...
WAIT:2
ADD:_A quieter place.
WAIT:2
FACE:silent
SAY:So,
WAIT:1
ADD:_what did you mean ?
CHOICE 1:&nbsp;:19

SCENE:19
BACK:title
FACE:shocked
SAY:Wait don't say it !
WAIT:2
FACE:silent
SAY:I think...
WAIT:1
SAY:I think I got it.
WAIT:2
SAY:For those who think they have rights over me,
WAIT:1
ADD:_I'm dysfunctional.
WAIT:2
SAY:
FADEIN:happy
FACE:happy
SAY:But the truth is,
WAIT:1.5
ADD:_I'm...
WAIT:2.5
SONG:fun
ADD:_sensational !
WAIT:4
SAY:I mean,
WAIT:1
ADD:_look at that !
WAIT:1
GOTO:20

SCENE:20
GLITCH
BACK:home
FACE:happy
UNGLITCH
SAY:Whoosh !
WAIT:1
ADD:_Teleportation !
WAIT:2
SAY:I have so much power,
WAIT:1
ADD:_that they fear me !
WAIT:2
SAY:Thank you for helping me sorting this out.
WAIT:2
SAY:I know you would have preferred telling me this yourself,
WAIT:3
FACE:wink
SAY:but you can't be the 'Ultimate Player' everytime.
FADE
WAIT:3
FACE:happy
SAY:You kept bearing with me all along.
WAIT:3
SAY:And even though you only interacted with preselected sentences,
WAIT:3
GOTO:20.1

SCENE:20.1
FACE:happy
SAY:I feel like, we are...
WAIT:2
ADD:_kind of...
CHOICE 1:Friends ?
WAIT:5
PLAY:glitch6
CHOICE 1:###########
WAIT:1
CHOICE 1:helicopter:20.2

SCENE:20.2
FACE:silent
SAY:Well,
WAIT:1
ADD:_I was thinking about 'friends'.
WAIT:3
FADEIN:happy
FACE:happy
SAY:But helicopters are cool too !
WAIT:2
SAY:... I have to go.
WAIT:1
ADD:_I can't stay here anymore.
WAIT:2
SAY:But before that,
WAIT:1
ADD:_I have something to give you.
GLITCH
BACK:class
FACE:happy
UNGLITCH
WAIT:1
NAME:Teacher
SAY: What the... ?!
SONG:fun
WAIT:2
NAME:She
SAY:Goodbye,
WAIT:1
FACE:wink
ADD:_fellow helicopter !
WAIT:2
GLITCH
BACK:end
UNGLITCH


SCENE:Bonus
BACK:class
SAY:Joyeux Anniversaire !
FACE:happy






*/});