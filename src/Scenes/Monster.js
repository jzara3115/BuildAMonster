class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.rightArmX = this.bodyX + 80;
        this.rightArmY = this.bodyY - 100;

        this.leftArmX = this.bodyX - 80;
        this.leftArmY = this.bodyY - 100;

        this.rightLegX = this.bodyX + 60;
        this.rightLegY = this.bodyX + 180;
        this.leftLegX = this.bodyX - 60;

        this.Akey = null;
        this.Dkey = null;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkE.png");

        //arm creation
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_redA.png");
        my.sprite.rightArm.flipY = true;
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_yellowA.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.leftArm.flipY = true;

        //leg creation
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_blueE.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.rightLegY, "monsterParts", "leg_blueE.png");
        my.sprite.leftLeg.flipX = true;

        //eye creation
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 50, "monsterParts", "eye_cute_light.png");

        //mouth creation
        my.sprite.mouth_smile = this.add.sprite(this.bodyX, this.bodyY + 25, "monsterParts", "mouthG.png");
        my.sprite.mouth_fangs = this.add.sprite(this.bodyX, this.bodyY + 25, "monsterParts", "mouthB.png");
        my.sprite.mouth_fangs.visible = false;

        //accesory creation
        my.sprite.eyebrow = this.add.sprite(this.bodyX, this.bodyY - 100, "monsterParts", "mouth_closed_sad.png");
        my.sprite.anntenna = this.add.sprite(this.bodyX+ 10, this.bodyY - 150, "monsterParts", "detail_green_antenna_large.png");

        //MOUTH CHANGING KEY CODE
        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.mouth_fangs.visible = false;
            my.sprite.mouth_smile.visible = true;
        });

        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.mouth_fangs.visible = true;
            my.sprite.mouth_smile.visible = false;
        });

        //MOVEMENT CODE
        this.Akey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.Dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        //MOVEMENT CODE
        if(this.Akey.isDown){
            my.sprite.rightLeg.setPosition(this.rightLegX--, this.rightLegY);
            my.sprite.body.setPosition(this.bodyX--, this.bodyY);
            my.sprite.leftLeg.setPosition(this.leftLegX--, this.rightLegY);
            my.sprite.rightArm.setPosition(this.rightArmX--, this.rightArmY);
            my.sprite.leftArm.setPosition(this.leftArmX--, this.leftArmY);
            my.sprite.eye.setPosition(this.bodyX, this.bodyY - 50);
            my.sprite.mouth_fangs.setPosition(this.bodyX, this.bodyY + 25);
            my.sprite.mouth_smile.setPosition(this.bodyX, this.bodyY + 25);
            my.sprite.eyebrow.setPosition(this.bodyX, this.bodyY - 100);
            my.sprite.anntenna.setPosition(this.bodyX + 10, this.bodyY - 150);
            console.log (this.bodyX);
        }

        if(this.Dkey.isDown){
            my.sprite.rightLeg.setPosition(this.rightLegX++, this.rightLegY);
            my.sprite.body.setPosition(this.bodyX++, this.bodyY);
            my.sprite.leftLeg.setPosition(this.leftLegX++, this.rightLegY);
            my.sprite.rightArm.setPosition(this.rightArmX++, this.rightArmY);
            my.sprite.leftArm.setPosition(this.leftArmX++, this.leftArmY);
            my.sprite.eye.setPosition(this.bodyX, this.bodyY - 50);
            my.sprite.mouth_fangs.setPosition(this.bodyX, this.bodyY + 25);
            my.sprite.mouth_smile.setPosition(this.bodyX, this.bodyY + 25);
            my.sprite.eyebrow.setPosition(this.bodyX, this.bodyY - 100);
            my.sprite.anntenna.setPosition(this.bodyX + 10, this.bodyY - 150);
            console.log(this.bodyX);
        }
       
    }

}