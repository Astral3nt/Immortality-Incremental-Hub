const articles = {
    // === EXTRA INFO ===
    "links": {
        title: "Links",
        content: `
            <p>Immortality incremental discord: 
                <a href="https://discord.com/invite/UcNu3MdTKu" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                    https://discord.com/invite/UcNu3MdTKu
                </a>
            </p>
            <p>Immortality Incremental Trello: 
                <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                    https://trello.com/b/0uCSKao3/immortality-incremental
                </a>
            </p>
        `
    },
    
    "codes": {
        title: "Codes",
        content: `
            <ul style="max-height: 500px; overflow-y: auto; padding-right: 10px;">
                <li><b>DUNGEON5</b> — 5 Tickets, 20 Jade</li>
                <li><b>CATACOMBS</b> — 15 Jade, 5 Ore Potions</li>
                <li><b>HARDTRAINING</b> — 10 Tickets, 20 Jade, 5 of each Mark Potion</li>
                <li><b>WORLD8PT2</b> — 5 Tickets, 1 of each Path Potion</li>
                <li><b>MINING</b> — 1 of each Path Potion, 10 Tickets</li>
                <li><b>WORLD9PT1</b> — 1 Ore Potion, 10 Jade</li>
            </ul>
        `
    },
    // === CURRENCIES ===
    "qi": { title: "Qi", content: `<p>This is the main currency in game.</p><p>It used for breakthrough.</p>` },
    "insight": { title: "Insight", content: `<p>This is w1 currency.</p><p>Unlocked by reaching realm 10.</p>` },
    "essence": { title: "Essence", content: `<p>This is w1 currency.</p><p>Unlocked by 1st body tempering.</p>` },
    "spiritstones": { title: "Spiritstones", content: `<p>This is dungeon currency.</p><p>Located in dungeons.</p>` },
    "soulfire": { title: "Soulfire", content: `<p>This is w1 currency.</p><p>Unlocked by 3rd body tempering.</p>` },
    "karma": { title: "Karma", content: `<p>This is w1 currency.</p><p>Unlocked by 5th body tempering.</p>` },
    "stars": { title: "Stars", content: "<p>This is w2 currency.</p><p>Unlocked upon entering w2 and collecting stars." },
    "nebulae": { title: "Nebulae", content: "<p>This is w2 currency.</p><p>Unlocked by doing nebula reset.</p>" },
    "quasar": { title: "Quasar", content: "<p>This is w2 currency.</p><p>Unlocked by buying in nebula board.</p>" },
    "miasma": { title: "Miasma", content: "<p>This is w3 currency.</p><p>Unlocked upon entering w3 and licking miasma button.</p>" },
    "ash": { title: "Ash", content: "<p>This is w3 currency.</p><p>Unlocked by doing ash reset.</p>" },
    "law": { title: "Law", content: "<p>This is w3 currency.</p><p>Unlocked by doing law reset.</p>" },
    "citizens": { title: "Citizens", content: "<p>This is w4 currency.</p><p>Unlocked by entering w4.</p>" },
    "faith": { title: "Faith", content: "<p>This is w4 currency.</p><p>Unlocked by converting citizens.</p>" },
    "divinity": { title: "Divinity", content: "<p>This is w4 currency.</p><p>Unlocked by buying at faith board.</p>" },
    "vitality": { title: "Vitality", content: "<p>This is w5 currency.</p><p>Unlocked upon entering w5.</p>" },
    "anima": { title: "Anima", content: "<p>This is w5 currency.</p><p>Unlocked by doing anima reset.</p>" },
    "flora": { title: "Flora", content: "<p>This is w5 currency.</p><p>Unlocked by buying at divinity board 3.</p>" },
    "tian": { title: "Tian", content: "<p>This is w6 currency.</p><p>Unlocked by killing hydra.</p>" },
    "souls": { title: "Souls", content: "<p>This is w6 currency.</p><p>Unlocked by collecting souls.</p>" },
    "dao": { title: "Dao", content: `<p>This is w7 currency.</p><p>Unlocked upon entering w7.</p>` },
    "strength": { title: "Strength", content: `<p>This is w8 currency.</p><p>Unlocked upon entering w8 and standing on the button.</p>` },
    "endurance": { title: "Endurance", content: `<p>This is w8 currency.</p><p>Unlocked upon doing endurance reset.</p>` },

    // === GLOBAL MARKS ===
    "mark_of_unity": {
        title: "Mark of Unity",
        content: `
            <ul>
                <li><b>Stranger (1/1.12)</b> — x100 Qi | x100 Luck (50K Max)</li>
                <li><b>Acquaintance (1/10)</b> — x50 insight | x30 Essence | x20 Qi (35K Max)</li>
                <li><b>Friend (1/112.36)</b> — x150 Soulfire | x100 Essence | x5 Mark Bulk | x3 Mark Luck (10K Max)</li>
                <li><b>Champion (1/1K)</b> — x200 Qi | x200 Karma | x2 Beast core chance | Mark Luck x5 (1K Max)</li>
                <li><b>Legend (1/10k)</b> — x500 luck | x500 Qi | x10 Remnants | x3 Mark Speed | x3 Mark Bulk | +3 Mark Clone (10 Max)</li>
            </ul>
        `
    },
    
    "mark_of_confluence": { 
        title: "Mark of Confluence", 
        content: `
            <ul>
                <li><b>Starfarer (1/1.12)</b> — x8 Stars | x4 Nebula | x1.5 Mark Speed (50K Max)</li>
                <li><b>Voidcaller (1/10)</b> — x6 Quasar | x4 Miasma | x1.5 Mark Bulk (35K Max)</li>
                <li><b>Apostle (1/112)</b> — x4 Remnants | x5 Ash | x2 Damage (10K Max)</li>
                <li><b>Lawbinder (1/1K)</b> — x5 Faith | x4 Laws | x2 Mark Luck (1K Max)</li>
                <li><b>Worldheart (1/10K)</b> — x5 Disciple Breakthrough Luck | x5 Citizens | x5 Faith | x8 Laws | x2 Mark Bulk | x2 Mark Speed | +3 Mark Clone (10 Max)</li>
            </ul>
        ` 
    },

    "mark_of_ambivalence": { 
        title: "Mark of Ambivalence", 
        content: `
            soon
        ` 
    },

    // === W1 MARKS ===
    "mark_of_insight": {
        title: "Mark of Insight",
        content: `
            <ul>
                <li><b>Dim (1/1)</b> — x10 luck (20K Max)</li>
                <li><b>Aware (1/10)</b> — x16 Qi | x1.5 luck | x2 insight (8K Max)</li>
                <li><b>Keen (1/50)</b> — x5 luck | x3 insight (4k Max)</li>
                <li><b>Clear (1/600)</b> — x40 Qi | x7 luck | x3 insight | x1.5 Essence (2k Max)</li>
                <li><b>Piercing (1/10K)</b> — x75 Qi | x8 luck | x2.5 Essence (740 Max)</li>
                <li><b>Deepseeing (1/250K)</b> — x150 Qi | x4 insight | x2.5 Soulfire (150 Max)</li>
                <li><b>Farsight (1/100M)</b> — x250 Qi | x14 luck | x4 Essence (83 Max)</li>
                <li><b>Truesight (1/1Qa)</b> — x20 luck | x6 insight | x5 Soulfire | x2 Stars | x2.5 Mark Bulk | x2.25 Mark Speed (20 Max)</li>
                <li><b>Omniscience (1/750DDe)</b> — x500 Qi | x30 luck | x10 insight | x10 Essence | x8 Soulfire | x5 Remnants | x3 Mark Bulk | x3 Mark Speed | x2 Mark Luck (10 Max)</li>
            </ul>
        `
    },

    "mark_of_essence": { 
        title: "Mark of Essence", 
        content: `
            <ul>
                <li><b>Fragment (1/1)</b> — x10 Qi | x55 luck (180K Max)</li>
                <li><b>Shard (1/12)</b> — x115 Essence | x55 Qi | x30 luck (75K Max)</li>
                <li><b>Node (1/60)</b> — x25 luck | x115 Insight (142.5K Max)</li>
                <li><b>Crest (1/750)</b> — x22 Essence | x12 Qi | x58 luck (19K Max)</li>
                <li><b>Ruby (1/15K)</b> — x42 Essence | x40 luck (1.3K Max)</li>
                <li><b>Nucleus (1/400k)</b> — x60 Essence | x35 luck | x2.5 Soulfire | x1.75 Mark Speed (170 Max)</li>
                <li><b>Prism (1/150M)</b> — x160 Essence | x80 Qi | x10 Insight | x2.5 Remnants (79 Max)</li>
                <li><b>Eternal (1/2Qa)</b> — x300 Essence | x150 Qi | x25 luck | x6 Soulfire | x2 Star | x2 Mark Bulk | x2 Mark Speed (20 Max)</li>
                <li><b>Sanguine (1/6.22Ocvg)</b> — x1Spvg Qi | x20 Disciple Breakthrough Luck | x150 Citizens | x25 Divinity | x550K Karma (25K Max)</li>
            </ul>
        ` 
    },

    "mark_of_soulfire": { 
        title: "Mark of Soulfire", 
        content: `
            <ul>
                <li><b>Mote (1/1)</b> — x10 Qi | x8 Essence | x2 Soulfire (280K Max)</li>
                <li><b>Kindling (1/40)</b> — x11 Luck | x18 Insight | x4 Soulfire (35K Max)</li>
                <li><b>Wraith (1/400)</b> — x8 Qi | x2 Karma (14K Max)</li>
                <li><b>Pyre (1/15K)</b> — x18 Luck | x10 Soulfire | x4 Remnants | x1.5 Mark Speed (5K Max)</li>
                <li><b>Brand (1/80K)</b> — x20 Luck | x35 Qi | x4 Karma (680 Max)</li>
                <li><b>Inferno (1/6M)</b> — x25 Essence | x20 Soulfire | x9 Remnants | x1.75 Mark Bulk (190 Max)</li>
                <li><b>Everflame (1/500B)</b> — x30 Luck | x81 Qi | x40 Essence | x30 Soulfire | x2 Mark Bulk | x1.25 Core Chance (60 Max)</li>
                <li><b>Soulnova (1/2No)</b> — x181 Qi | x61 Soulfire | x2 Remnants | x3 Mark Bulk | x2.5 Mark Speed | x2 Mark Luck (20 Max)</li>
            </ul>
        ` 
    },

    "mark_of_karma": { 
        title: "Mark of Karma", 
        content: `
            <ul>
                <li><b>Trace (1/1)</b> — x5 Qi | x5 Karma (300K Max)</li>
                <li><b>Ledger (1/40)</b> — x5 Qi | x4 Karma | x4 Soulfire (60K Max)</li>
                <li><b>Burden (1/400)</b> — x7 Luck | x4 Qi | x4 Karma (40K Max)</li>
                <li><b>Mercy (1/12K)</b> — x10 Luck | x20 Qi | x6 Karma | x2 Remnants (12K Max)</li>
                <li><b>Balance (1/250K)</b> — x15 Luck | x20 Qi | x5 Soulfire | x2 Karma (1.2K Max)</li>
                <li><b>Reckoning (1/60M)</b> — x13 Luck | x38 Qi | x16 Essence | x2 Karma (200 Max)</li>
                <li><b>Samsara (1/50B)</b> — x125 Luck | x12.5K Qi | x3 Karma | x3 Mark Bulk | x2 Mark Speed (40 Max)</li>
                <li><b>Nirvana (1/2T)</b> — x375 Luck | x12.5K Qi | x13 Karma | x3 Stars | x2 Mark Bulk (20 Max)</li>
            </ul>
        ` 
    },

    // === W2 MARKS ===
    "mark_of_stars": { 
        title: "Mark of Stars", 
        content: `
            <ul>
                <li><b>Spark (1/1)</b> — x400 Luck | x5 Stars (5Qa Max)</li>
                <li><b>Stardust (1/25K)</b> — x400 Qi | x12 Stars (1Qa Max)</li>
                <li><b>Astral (1/400M)</b> — x1K Luck | x1K Qi | x16 Stars | x2 Mark Bulk (20T Max)</li>
                <li><b>Comet (1/50B)</b> — x2K Luck | x1.6K Qi | x20 Stars | x7 Mark Bulk (100B Max)</li>
                <li><b>Radiant (1/40T)</b> — x2K Luck | x2.4K Qi | x2 Nebula (5B Max)</li>
                <li><b>Celestial (1/3.5Qa)</b> — x800 Luck | x800 Qi | x1.5 Nebula (50M Max)</li>
                <li><b>Supernova (1/500Qa)</b> — x1K Luck | x600 Qi | x5 Essence | x15 Nebula | x6 Mark Speed (300K Max)</li>
                <li><b>Genesis (1/25Qi)</b> — x2K Luck | x2K Qi | x6 Nebula | x2 Mark Bulk (10K Max)</li>
            </ul>
        ` 
    },

    "mark_of_nebulae": { 
        title: "Mark of Nebulae", 
        content: `
            <ul>
                <li><b>Mistglow (1/1)</b> — x4.6 Nebula | x2K Luck | x3K Karma (15Qi Max)</li>
                <li><b>Gasveil (1/750)</b> — x5.4 Nebula | x4K Luck | x3K Qi | x5 Mark Speed (1Qi Max)</li>
                <li><b>Starseed (1/350K)</b> — x4.8K Luck | x12 Stars | x6 Nebula | x2.5K Qi | x2 Mark Bulk (100Qa Max)</li>
                <li><b>Moonwake (1/15B)</b> — x1.6K Luck | x1.6K Qi | x20 Nebula | x40 Stars | x1.5K Karma | x6 Mark Speed (5Qa Max)</li>
                <li><b>Cometheart (1/25T)</b> — x2K Luck | x2.4K Qi | x40 Nebula | x8 Mark Bulk (500T Max)</li>
                <li><b>Voidpetal (1/1Qa)</b> — x1K Luck | x1K Qi | x20 Nebula | x20 Stars (80T Max)</li>
                <li><b>Novashard (1/150Sx)</b> — x500 Luck | x300 Qi | x10 Essence | x100 Karma | x5 Nebula | x4 Mark Speed (750B Max)</li>
                <li><b>Astral Crown (1/10Sp)</b> — x1K Luck | x2K Qi | x300 Karma | x20 Nebula | x3 Mark Bulk (1B Max)</li>
            </ul>
        ` 
    },

    "mark_of_quasar": { 
        title: "Mark of Quasar", 
        content: `
            <ul>
                <li><b>Flare (1/1)</b> — x300 Quasar | x8K Qi (240Qi Max)</li>
                <li><b>Vanta (1/6K)</b> — x16 Nebula | x8K Luck | x4K Karma | x132 Quasar (16Qi Max)</li>
                <li><b>Sear (1/2.8M)</b> — x12K Qi | x48 Stars | x112 Quasar | x3K Karma | x3 Mark Bulk (1.6Qi Max)</li>
                <li><b>Halo (1/120B)</b> — x6K Karma | x132 Quasar | x1.5 Mark Luck | x3K Qi (80Qa Max)</li>
                <li><b>Lumen (1/200T)</b> — x12 Mark Bulk | x6K Qi | x3K Luck | x148 Quasar (8Qa Max)</li>
                <li><b>Surge (1/8Qa)</b> — x3.2K Qi | x260 Quasar | x3 Remnants (1.3Qa Max)</li>
                <li><b>Corona (1/1.2Sp)</b> — x2K Karma | x120 Quasar | x3K Qi | x3K Luck (12T Max)</li>
                <li><b>Zenith (1/2No)</b> — x4 Mark Luck | x240 Quasar | x3 Mark Bulk | x8K Qi (16B Max)</li>
            </ul>
        ` 
    },

    // === W3 MARKS ===
    "mark_of_miasma": { 
        title: "Mark of Miasma", 
        content: `
            <ul>
                <li><b>Spore (1/1)</b> — x32 Miasma | x18 Mark Speed | x56 Quasar (25K Max)</li>
                <li><b>Seed (1/2B)</b> — x48 Miasma | x8K Breakthrough Luck | x8 Mark Bulk (5M Max)</li>
                <li><b>Rotbrand (1/900B)</b> — x86 Miasma | x128K Qi | x512 Stars | x2 Manual Luck (100B Max)</li>
                <li><b>Vein (1/12Qa)</b> — x144 Miasma | x256K Breakthrough Luck | x2 Damage (50Qa Max)</li>
                <li><b>Bloom (1/15Qn)</b> — x56 Miasma | x336K Qi | x12 Beast Remnants | x128 Stars | x5 ash | x2 Mark Luck (5Qn Max)</li>
                <li><b>Wormmoon (1/1Sp)</b> — x72 Miasma | x4.8M Qi | x4.8M Breakthrough Luck (2Sx Max)</li>
                <li><b>Tombmire (1/800No)</b> — x20 Miasma | x1.6M Breakthrough Luck | x1.2M Qi | x7.5 ash | x3 Mark Speed | x2 Mark Bulk (200Sp Max)</li>
                <li><b>Abyssplague (1/5Ud)</b> — x32 Miasma | x12M Qi | x12M Breakthrough Luck | x2 Manual Luck (50No Max)</li>
            </ul>
        ` 
    },

    "mark_of_ash": { 
        title: "Mark of Ash", 
        content: `
            <ul>
                <li><b>Cinder (1/1)</b> — x12 Ash (100K Max)</li>
                <li><b>Smolder (1/2B)</b> — x16 Miasma | x16 Ash | x1K Quasar (20M Max)</li>
                <li><b>Soot (1/900B)</b> — x48 Ash | x2 Damage (400B Max)</li>
                <li><b>Ember (1/12Qa)</b> — x24 Beast Remnants | x3 Mark Bulk | x3 Mark Speed (200Qa Max)</li>
                <li><b>Pyre (1/15Qn)</b> — x128 Ash | x9.6M Breakthrough Luck | x9.6M Qi (20Qi Max)</li>
                <li><b>Ashveil (1/1Sp)</b> — x256 Miasma | x96 Ash | x256 Quasar (8Sx Max)</li>
                <li><b>Charfall (1/800No)</b> — x7 Damage | x2 Beast Core Chance | x12 Beast Remnants (800Sp Max)</li>
                <li><b>Hollowflame (1/5Ud)</b> — x256 Ash | x96 Miasma | x128M Breakthrough Luck | x128M Qi (200No Max)</li>
                <li><b>Covenant (1/217.73Qavg)</b> — x50Qivg Qi | x4 Disciple Breakthrough Luck | x5 Citizens | x12 Faith | x8 Laws | x2 Mark Luck</li>
            </ul>
        ` 
    },

    "mark_of_law": { 
        title: "Mark of Law", 
        content: `
            <ul>
                <li><b>Edict (1/1)</b> — x7.5 Laws | x2 Mark Bulk (100Ocd Max)</li>
                <li><b>Clause (1/100B)</b> — x12 Laws | x5 Mark Bulk (100Sxd Max)</li>
                <li><b>Verdict (1/100T)</b> — x512M Qi | x1B Essence | x1B Insight | x12 Laws (60Qid Max)</li>
                <li><b>Tribunal (1/5Qi)</b> — x7.5 Laws | x2 Manual Luck | x2.5 Mark Luck | x3 Mark Speed (3Qad Max)</li>
                <li><b>Mandate (1/20Sx)</b> — x1B Soulfire | x1B Karma | x16 Laws (3Td Max)</li>
                <li><b>Decree (1/5Oc)</b> — x1B Stars | x1B Nebula | x8 Laws | x4 Mark Bulk | x32 Mark Speed (30Ud Max)</li>
                <li><b>Statute (1/1Ud)</b> — x5B Qi | x4M Luck | x24 Laws | x10 faith (3No Max)</li>
                <li><b>Absolute (1/100Td)</b> — x1B Quasar | x36 Laws | x8 Mark Bulk | x2 Mark Luck | x8 Mark Speed (3Oc Max)</li>
            </ul>
        ` 
    },

    // === W4 MARKS ===
    "mark_of_faith": { 
        title: "Mark of Faith", 
        content: `
            <ul>
                <li><b>Prayer (1/1)</b> — x4 Citizens | x6 Faith (15Ocd Max)</li>
                <li><b>Vow (1/24T)</b> — x50Uvg Qi | x12 Faith (10Spd Max)</li>
                <li><b>Hymn (1/240Qa)</b> — x2 Disciple Breakthrough Luck | x18 Citizens | x24 Faith (100Sxd Max)</li>
                <li><b>Shrine (1/2.4Sx)</b> — x20Dvg Qi | x40 Citizens | x55 Faith (1Sxd Max)</li>
                <li><b>Zeal (1/24Sp)</b> — x6 Disciple Breakthrough Luck | x90 Faith | x3 Mark Speed (10Qid Max)</li>
                <li><b>Miracle (2.4No)</b> — x160 Citizens | x220 Faith | x12 Laws (100Qad Max)</li>
                <li><b>Saint (1/240Ud)</b> — x80Qavg Qi | x24 Disciple Breakthrough luck | x5 divinity | x500 Faith (10Td Max)</li>
                <li><b>Providence (1/240Qad)</b> — x50Qivg Qi | x80 Disciple Breakthrough Luck | 1.2K Citizens | x2.5K Faith | x10 divinity (100Ud Max)</li>
            </ul>
        ` 
    },

    "mark_of_divinity": { 
        title: "Mark of Divinity", 
        content: `
            <ul>
                <li><b>Sanctum (1/1)</b> — x9 citizens | x13.5 divinity</li>
                <li><b>Seraph (1/1No)</b> — x112.5Uvg qi | x27 divinity</li>
                <li><b>Numen (1/10Dd)</b> — x4.5 disciple luck | x40.5 citizens | x54 divinity</li>
                <li><b>Aureole (1/10Sxd)</b> — x45Dvg qi | x90 citizens | x123.75 divinity</li>
                <li><b>Elysium (1/10Vg)</b> — x13.5 disciple luck | x202.5 divinity | x6.75 mark speed</li>
                <li><b>Emperyan (1/10Qivg)</b> — x360 citizens | x495 divinity | x27 laws</li>
                <li><b>Theurgy (1/10Ocvg)</b> — x180 Qavg qi | x54 disciple luck | x1.12K divinity</li>
                <li><b>Benediction (1/100Tg)</b> — x112.5Qivg qi | x180 disciple luck | x2.7K citizens | x5.62K divinity</li>
            </ul>
        ` 
    },

    // === W5 MARKS ===
    "mark_of_vitality": { 
        title: "Mark of Vitality", 
        content: `
            <ul>
                <li><b>Lifespark (1/1)</b> — x4.5Qi qi | x13.5 vitality</li>
                <li><b>Heartroot (1/15.42Sp)</b> — x27 vitality | x4.5 anima</li>
                <li><b>Marrowleaf (1/154.22Dc)</b> — x2.25UD qi | x6.75 disciple luck</li>
                <li><b>Pulsebloom (1/1.23Qad)</b> — x72 vitality | x4.5 mark speed</li>
                <li><b>Animabark (1/12.34Spd)</b> — x108 vitality | x11.25 anima</li>
                <li><b>Spiritvein (1/82.25Vg)</b> — x2.25Tvg qi | x27 disciple luck | x4.5 mark bulk</li>
                <li><b>Verdantheart (1/411Tvg)</b> — x216 vitality | x13.5 Anima | x4.5 mark luck</li>
                <li><b>Worldseed (1/2.47Spvg)</b> — x225Tg qi | x72 disciple luck | x576 vitality | x18 anima</li>
            </ul>
        ` 
    },

    "mark_of_anima": { 
        title: "Mark of Anima", 
        content: `
            <ul>
                <li><b>Breathwisp (1/1)</b> — x2.25No qi | x18 vitality</li>
                <li><b>Soulthread (1/10Sp)</b> — x36 vitality | x4.5 anima</li>
                <li><b>Karmic trace (1/100Dc)</b> — x2.25Nod qi | x6.75 anima | x6.75M karma</li>
                <li><b>Auralumen (1/1Qad)</b> — x6.75 citizens | x72 vitality | x9 anima</li>
                <li><b>Animaflow (1/10Spd)</b> — x2.25Novg qi | x13.5 anima | x18M karma</li>
                <li><b>Spiritcore (1/100Vg)</b> — x144 vitality | x18 anima</li>
                <li><b>Florasoul (1/1Qavg)</b> — x13.5 citizens | x6.75 divinity | x27 anima | x4.5 flora | x54M karma</li>
                <li><b>Worldbreath (1/10Spvg)</b> — x2.25 Notg qi | x288 vitality | x36 anima | x9 flora | x144M karma</li>
            </ul>
        ` 
    },

    "mark_of_flora": { 
        title: "Mark of Flora", 
        content: `
            <ul>
                <li><b>Seedling (1/1)</b> — x18 vitality | x9 flora</li>
                <li><b>Rootwisp (1/100Dc)</b> — x45 vitality | x27 anima</li>
                <li><b>Petalflare (1/1Qad)</b> — x2.25Novg qi | x22.5 flora</li>
                <li><b>Thornpulse (1/10Spd)</b> — x11.25 disciple luck | x90 vitality</li>
                <li><b>Bloomheart (1/100Vg)</b> — x40.5 anima | x40.5 flora</li>
                <li><b>Lifebough (1/1Qavg)</b> — x2.25Notg qi | x22.5 disciple luck | x180 vitality</li>
                <li><b>Verdantsoul (1/10Spvg)</b> — x2.25Qaqag qi | x72 anima | x90 flora</li>
                <li><b>Worldflora (1/100Tg)</b> — 2.25Noqag qi | x54 disciple luck | x432 vitality | x144 anima | x216 flora</li>
            </ul>
        ` 
    },

    "mark_of_tian": { 
        title: "Mark of Tian", 
        content: `
            <ul>
                <li><b>Spiri (1/1)</b> — x2.25No qi | x9 divinity | x9 tian</li>
                <li><b>Astral (1/200Dc)</b> — x18 citizens | x18 divinity | x18 tian</li>
                <li><b>Divine (1/2Qad)</b> — x2.25Nod qi | x11.25 disciple luck | x27 tian</li>
                <li><b>Sacred (1/20Spd)</b> — x45 divinity | x22.5 laws | x36 tian</li>
                <li><b>Immortal (1/200Vg)</b> — x45 vitality | x22.5 anima | x54 tian</li>
                <li><b>Heavenly (1/2Qavg)</b> — x2.25Novg qi | x22.5 disciple luck | x22.5 flora | x72 tian</li>
                <li><b>Primordial (1/20Spvg)</b> — x2.25Notg qi | x112.5 citizens | x112.5 divinity | x108 tian</li>
                <li><b>Dao (1/200Tg)</b> — x2.25Noqag qi | x225 divinity | x225 vitality | x112.5 anima | x112.5 flora | x216 tian</li>
            </ul>
        ` 
    },

    "mark_of_souls": { 
        title: "Mark of Souls", 
        content: `
            <ul>
                <li><b>Wisp (1/1)</b> — x11.25 souls</li>
                <li><b>Shade (1/1K)</b> — x18 souls</li>
                <li><b>Wraith (1/1M)</b> — x27 souls</li>
                <li><b>Revenant (1/1B)</b> — x45 souls</li>
                <li><b>Seraph (1/1T)</b> — x78.75 souls</li>
                <li><b>Empyrean (1/1Qa)</b> — x135 souls</li>
            </ul>
        ` 
    },

    // === SECRET MARKS ===
    "secret_marks": {
        title: "Secret Marks",
        content: `
            <ul>
                <li><b>Revenge (Karma)</b> — x2 remnants | x1.5 damage | +2 mark clone</li>
                <li><b>Apotheosis (Quasar)</b> — x1.8M qi | x1.8M luck | x20 miasma | x30 ash | x2 manual luck | x6 mark bulk</li>
                <li><b>Deity (Soulfire)</b> — x5Oc qi | x5 citizens | x3 faith | x45K karma | x30 laws | x3 damage (5k max)</li>
                <li><b>Judge (Laws)</b> — x50Uvg qi | x5 disciple breakthrough luck | x2 mark bulk</li>
                <li><b>Voidcinder (Ash)</b> — x512Notg | x256 vitality | x8 anima | x2 beast cores | x2 materials</li>
                <li><b>Key (Insight)</b> — x512Notg qi | x512 disciple breakthrough luck | x1T anima | x15 flora | unlocks flora upgrade tree (1 max)</li>
            </ul>
        `
    },

    // === DAO PATH ===
    "dao_path": {
        title: "Dao Path",
        content: `
            <ul>
                <li><b>Creative (1/1)</b> — x2 insight | x2 essence | x2 soulfire | x5 dao | x1.5 meridian luck | x2 karma</li>
                <li><b>Joyous (1/250)</b> — 7.5 dao | x1.5 dao generation | x1.5 meridian luck | x3 stars | x3 nebulae | x3 quasar</li>
                <li><b>Radiance (1/500)</b> — x10 dao | x1.5 meridian luck | x4 miasma | x4 ash | x4 laws | x1.5 dao path luck</li>
                <li><b>Snake (1/2.5K)</b> — x5 faith | x5 divinity | x15 dao | x1.5 dao path bulk</li>
                <li><b>Gentle (1/7.5K)</b> — x7 vitality | x7 anima | x7 flora | x20 dao | x1.5 dao path speed</li>
                <li><b>Abyssal (1/20K)</b> — x9 tian | x9 souls | x30 dao | x2 material drops</li>
                <li><b>Bound (1/50K)</b> — x50 dao | x2 dao path bulk | x2 dao path luck</li>
                <li><b>Receptive (1/200K)</b> — x100 dao | x2 dao path bulk | x2 dao path luck | x2 dao path speed</li>
            </ul>
        `
    },

    "strength_path": {
        title: "Dao Path",
        content: `
            soon
        `
    },

 // === WORLD GUIDES ===
// === WORLD GUIDES ===
"world1_guide": {
    title: "World 1 Guide",
    content: `
        <h3>Progression of W1 (World 1)</h3>
        
        <!-- Section 1: Insight -->
        <div style="background-color: #222a38; border-left: 4px solid #4ea8de; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #4ea8de; margin-top: 0;">Insight</h4>
            <p>After finishing the tutorial, the goal is to reach Realm [#30] to afford the first body tempering that will unlock a new currency and boost the following stats: <b>x2 Luck | x3 Qi | x5 Insight</b>.</p>
            <p>Now, what you will need to do is continue progressing with Insight upgrades, at the same time, to the right of the body tempering board you will see the newly acquired currency Essence ....to make it easier its recommended to start upgrading the Essence board as soon as unlocked, to afford the "Extra upgrades" board that give you access to Qi, Luck and Insight multipliers.</p>
            <p>The marks are one of the most important things in the game, they play a key role in the progress of reaching end game... <b>100k-200k Insight</b> is a good amount to start opening the "Mark of Insight" for the first time, it will be enough to get a slight Insight boost... (at first you wont be able to obtain the rarest marks because of the low stats).</p>
            <p>After a bit of farming Insight and the "Mark of Insight", you will feel stuck, the solution is to focus more on Essence upgrades, with that, you max all the Insight upgrades and can officially move to the next currency completely.</p>
            <p><i>(The marks in "Mark of Insight" that can be maxed at this point will be the first 6 of the index...the 7th one will be obtainable but will need some time afk to max).</i></p>
        </div>

        <!-- Section 2: Essence & Soulfire -->
        <div style="background-color: #aa566452; border-left: 4px solid #f72537; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #f72537; margin-top: 0;">Essence & Soulfire</h4>
            <p>All there is to do now, is farming Essence upgrades till you can reach Realm [#85] to proceed with body tempering that will unlock Soulfire currency and Beast Hunt.</p>
            <p>Reached this point the progression will be times harder than before, after doing the body tempering continue to farm Essence until you can get <b>"1Trillion" Essence</b> without too much problem and start opening "Mark of Essence" for a good boost.</p>
            <p>Done with the "Mark of Essence", farm Essence to further upgrade it...the goal is to reach Realm [#100] for the body tempering that will give you x5 Soulfire, and some other useful multipliers.</p>
            <p>Farm Soulfire and buy the "Soul Automations" upgrade, open some "Mark of Soulfire" maxing atleast the first 3 marks of the index Continue farming Soulfire to then reach Realm [110] and do the next body tempering.</p>
            <p>You have unlocked Karma currency, different from the others W1 (World 1) currency's, it doesn't have an upgrade board but a milestone one instead.</p>
        </div>

        <!-- Section 3: Karma -->
        <div style="background-color: #382d22; border-left: 4px solid #f77f00; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #fcbf49; margin-top: 0;">Karma</h4>
            <p>Karma is found to the right of Beast Hunt near the portal for World 2, first thing to do is stand on the button till you reach the <b>"10K Karma Milestone"</b> Go back to Soulfire , progress a bit while opening some "Mark of Soulfire" to afford the "Soulfire boost Karma" upgrade...gather some more Soulfire to be able to reach <b>"1M Karma Milestone"</b>, now you have enough to start opening the first "Mark of Karma".</p>
            <p>With the boost from the marks just obtained, reach <b>"50M" Karma</b> and continue opening "Mark of Karma", then reach <b>"50B Karma Milestone"</b>...after reaching it, continue with Soulfire upgrades and try to max the first 6 marks of "Mark of Soulfire" index. The last two things left now are to max the first 5 marks of "Mark of Karma" index, farm more Soulfire so you get more Karma multiplier.</p>
            <p>Finished all these steps you can go for the <b>"10T" "Karma Milestone"</b>, or directly enter W2 (World 2) after getting Realm [#135].</p>
        </div>
        
        <!-- Section 4: Notes / Milestones -->
        <div style="background-color: #1e3328; border-left: 4px solid #2a9d8f; padding: 12px; border-radius: 4px;">
            <p style="margin: 0;"><b>Note:</b> Before progressing in W2 (World 2), you <b>SHOULD</b> reach "Beast Stage {50}" to gain the x6 Stars multiplier given by the "Beast Milestone" , with the [Lesser Cores] obtained while doing so, roll "Bloodlines" and equip the one that boost your stats for the currency's you're farming at the moment.</p>
        </div>
    `
},

// === WORLD GUIDES ===
"world2_guide": {
    title: "World 2 Guide",
    content: `
        <h3>Progression of W2 (World 2)</h3>

        <!-- Section 1: Stars -->
        <div style="background-color: #9f9f9f68; border-left: 4px solid #c1c2c2; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #c1c2c2; margin-top: 0;">Stars</h4>
            <p>You finally enter W2 (World 2), after spawning, forward to the right you will have the Star upgrades board and the "Mark of Star".</p>
            <p>Having reached the "Beast Stage {50}" before progressing in W2 (World 2), the Star will be easy to increase at first...focus on Star upgrades instead of Qi and Luck and with "15M" Star open "Mark of Star" for a slight boost.. Now what you do is progress Star and open some "Mark of Star" from time to time.</p>
            <p>You WILL be stuck at Star without the "Solar Body Tempering" at Realm [#170] that boost x10 Star, to be able to afford it, we need to go back in W1 (World 1)... First thing you can do is max the first 7 marks of "Mark of Essence" (if you didn't already", done with that you need to obtain the best or second best "Bloodlines" in the game called "Dragon" and "Quilin" max the one you got first.. To farm in the most efficent way, select the highest "Beast Stage" that you can one shot with the "Luck Focus", found in the Soulfire area. While farming [Lesser Cores] , its recommended to upgrade the Beast Hunt board so you can reach "Beast Stage {61}" for [Lesser Cores] drop chance increase.</p>
            <p>After obtaining "Dragon" or "Quilin" and taking one of them to max level, you should be able to get "Beast Stage {75}" for the second "Beast Milestone" so that when you unlock Nebula it will be alot easier thanks to the x6 Nebula.</p>
            <p>Its time to go back to Star upgrades, when you hit end "Trillion" Star , go in W1 (World 1) and max the "Mark of Karma" for x3 Star and the mark "Everflame" in "Mark of Soulfire" ...then use one of each potions (except the "Breakthrough Luck Potion") to max the 8th mark in "Mark of Insight" that boost x2 Star (it max at 20 units), after doing that Make sure to pause the potions by clicking on the potions UI (Icon) on the left down corner of the screen..</p>
            <p>Now move to the "Mark of Essence", unpause the potions (by clicking on the potions UI (Icon) and max it (max at 20 units) for another x2 Star...pause the potions again to not waste them.</p>
            <p>Return to W2 (World 2), pick up 10 orbs and open "Mark of Star"...continue farming Star, and when you have "Qi" Star afk "Mark of Star" until you max the first mark of the index.. Instantly after that, farm again a little bit of Star to upgrade Qi and Luck, reached Realm [#170] do the body tempering that will boost your Star gain by x10 Star.</p>
            <p>Max Soulfire and return to W2 (World 2), now you will be able to unlock the new currency Nebulae.</p>
        </div>

        <!-- Section 2: Nebulae -->
        <div style="background-color: #71cede56; border-left: 4px solid #44b3d2; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #44b3d2; margin-top: 0;">Nebulae</h4>
            <p>Gather enough Star and reset, at first you have to focus on upgrading Nebulae and Star multiplier, and the left overs will go into the "Marks Boost" upgrade and "Mark of Nebulae".. When you reach "Dc" Star buy "Auto Soulfire" and "Auto Soulfire Upgrades" in the Star upgrades board, so that when you will body temper again there's no need to go back in W1 (World 1).</p>
            <p>Now that you have maxed Nebulae and Star multiplier, you should have around "Sx" Nebulae...open some "Mark of Nebulae" until your MPS (Mark per Second) is at "Qa" and switch to "Mark of Star" After hitting "Qi" MPS, reset once, upgrade "Mark Boost" in Nebulae upgrades board and with the remaining open "Mark of Nebulae" to reach "Sx" MPS, by now you will probably have maxed the 1st and 4th marks of "Mark of Nebulae"... Go in W1 (World 1) and reach the "1No Karma Milestone" for x1k Nebulae.</p>
            <p>Go back in W2 (World 2) and open "Mark of Star" to max every marks of the index, now reset again and fully upgrade the Nebulae upgrades board, you have unlocked Quasar.</p>
        </div>

        <!-- Section 3: Quasar -->
        <div style="background-color: #aab36351; border-left: 4px solid #eeee3f; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #eeee3f; margin-top: 0;">Quasar</h4>
            <p>Instantly after unlocking Quasar , start meditating to increase proficiency and focus on taking Quasar multiplier to "19"... After that, take Karma multiplier to "15", go back in W1 (World 1) to get the "500Dd Karma Milestone" for 4x Quasar boost.</p>
            <p>Continue focusing on Quasar multiplier upgrade till you have "Trillion" of Quasar , now move to open "Mark of Quasar" to reach the following quantity's... "170B" of the 1st mark "Flare" for x4 Quasar , and "7B" of the 2th mark "Vanta" for 2x Quasar.</p>
            <p>You will instantly hit "Qi" of Quasar , open "Mark of Quasar" again and max the first 5 marks of the index...fully upgrade the Quasar upgrades board, then go in W1 (World 1) and reach the "1Spd Karma Milestone"...</p>
            <p>Return in W2 (World 2) and max the 5th and 6th mark of "Mark of Nebulae", now max the 6th mark of "Mark of Quasar"... then go in W1 (World 1), unpause the potions that we used back when we first started the game to max the last mark of "Mark of Soulfire" and after, pause the potions.</p>
            <p>Once again go back to W2 (World 2), unpause the potions and max the last two marks of "Mark of Nebulae", only thing left to do is opening "Mark of Quasar" until you reach Realm [#240] to then access W3 (World 3).</p>
        </div>
    `
},

// === WORLD GUIDES ===
"world3_guide": {
    title: "World 3 Guide",
    content: `
        <h3>World 3 Guide</h3>

        <!-- Section 1: Preparation & Overview -->
        <div style="background-color: #222a38; border-left: 4px solid #4ea8de; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #4ea8de; margin-top: 0;">Preparation & Overview</h4>
            <p>Before really starting with miasma, we recommend you to optimize earlier steps first:</p>
            <ul>
                <li>Make sure you got all the boosts from liking the game, saving etc (interaction rewards).</li>
                <li>Try joining a sect for daily jades and boosts.</li>
                <li>Go back to beast in world 1, here you will have to try to get a good bloodline and in the process you could also reach a higher beast milestone (this can also be done after unlocking world 3). Also don’t forget to equip it with the backpack icon!</li>
                <li>The jades you got from the codes, sect etc will be much of help for miasma and ash, so save them up for those.</li>
            </ul>
        </div>

        <!-- Section 2: Miasma -->
        <div style="background-color: #49ac8247; border-left: 4px solid #32f856; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #32f856; margin-top: 0;">Miasma (time needed: 3-4h)</h4>
            <p>What you have to do at the start is sit on the button of the cultivation manuals, while progressing on the miasma board, this way, you are progressing in 2 ways at the same time. For the miasma board you have to spam click the gain button (at the start), for the upgrades your focus must be on getting more miasma upg first. When you get to upgrades above 100k you can try getting some marks. Although you can’t open many marks at the start, it will still give you immense miasma boosts. After reaching around 3k miasma gain per click you can go for the auto miasma gain at the end of the board, this will make the progress much easier already <i>(important notice, you can still click on the miasma gain button to speed up the progress)</i>.</p>
            <p>After maxing Spore in the miasma mark, you will hit a little bottleneck (don’t try to open the mark anymore, you won’t get any more boosts until later on). As you can see on the cultivation board, getting manuals will give you a dmg boost + remnant boost, so it will be easier to get to a higher beast milestone. If you followed the guide you will normally have the Hollow Venom Codex by now. Go back to beast and try getting milestone 100 (if you haven’t maxed the dragon bloodline yet, try to upgrade it now). Maxing the quasar mark will be possible now (if the last one aint possible yet, you can come back to it later on). Now go back to w3 and try to get the quasar boost upgrade (also possible to do it before). This will give you enough miasma boost to reach the Spectral Body Tempering.</p>
            <p>Don’t forget to go back to w2 after resetting, it's not automated yet. Now that you’ve done that we’re in the trillions of miasma, keep standing on the manual button while upgrading your miasma gain. This process can be interrupted every minute or even fewer to go to the miasma mark (now you do have enough miasma for it). This process will easily get you to Qi miasma. Now you can also upgrade your manual luck (this gives a higher chance for getting a better manual).</p>
            <p>After more grinding you should have the Grave Lotus Scripture. With that you can go back to w1 to grind some more beast (3rd chance to max your dragon bloodline). Interrupt the beast grind every few minutes to go back to w3 and upgrade your miasma gain and/or opening some miasma marks. Killing a beast at stage 110+ can earn you greater cores (the blue cores) instead of the lesser beast cores (the red ones). You can also turn 100 lesser cores into one greater core. The greater cores will allow you to unlock roots: the blue circle you can see when you enter w3.</p>
            <p>The system works exactly the same as the bloodlines. <i>(this part of miasma is gonna take longer, it’s normal dw) side note: This step is not obligated to do now, but doing beast is something easy you can do in the meantime to make the progress further on easier.</i></p>
            <p>That said, you will reach Sp of miasma following this guide, then reset on the ash board asap!</p>
        </div>

        <!-- Section 3: Ash PART 1 -->
        <div style="background-color: #3533324b; border-left: 4px solid #282827; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #000000; margin-top: 0;">Ash PART 1 (4-5h)</h4>
            <p>First of all you have to know that ash is the first currency that you can really struggle with for a long time. It is normal that it takes more time than previous currencies, so don’t worry about that. Use the rest of your jades that you saved up for ash, it will help you a lot! (note that you can also reset your jades with 50 jades/robux). I would also advise you to use a lot of the pots you got from the codes at the ash stage. Because ash takes so long I will not go too much into detail, this guide would simply be way too long, ty for your understanding.</p>
            <p>Anyhow, after doing the ash reset for the first time you will reset all currencies before ash. Therefore you will have to head back every time you reset to w2 to get all the upgrades again (until the body tempering at realm 305). The first upgrades of the ash board will go very fast, so you will be able to progress pretty fast at first (don’t forget to do the miasma board + miasma mark as well).</p>
            <p>When the progress gets a bit slower you can save up a bit of miasma and reset on the ash board again. The next gain shows how much ash you will gain per second after resetting, I would advise you to have it around x10 of your current gain for the second reset. With that you can normally reach the Dreadflame Body Tempering which will boost your progress even more (if it seems you can’t reach it yet, just reset again at a significantly higher next ash gain). As mentioned before, to get back you still have to do the w2 stuff again.</p>
            <p>Repeat the process of upgrading miasma/ash board + miasma mark with resetting every x5-x10 next gain (don’t forget w2). You can also go for a better manual while you’re doing that. At a couple of M/s ash you can also do the mark of ash (you will max cinder pretty easily, then stop opening the mark until later on). When you’re at 100-200 Dc mps (with pots) you can also go back to the insight mark in w1 to get omniscience maxed. The most important thing of getting omniscience is that it will help you get a much higher mps to get the karma secret mark first, and then get way more of the miasma mark. At this point you should not be running out of the miasma currency, if it is the case you need to reset your ash more. After that you will again have to do the process I mentioned earlier on (it will not be possible to do x5-x10 resets anymore). At mid-high billions of ash you will feel stuck again, go back to beast and afk a bit to get more greater cores and beast milestone 125 at least (shouldn’t be a problem).</p>
            <p>Your progress will slow down a lot at around realm 295. Afk beast, do the process mentioned earlier etc till you have around 50 T/s ash (lower also possible). Now you can afk the ash mark and max smolder. After waiting for some time and repeating the process again while opening the marks you will reach the #305 body tempering. Now you can do the process mentioned earlier another time. After that you will also need to get the 150 beast milestone. With this and even more of the previous process (I know it's repetitive) you will be able to reach the first upgrade of the ash tree (don’t forget the manuals). Getting the heavenly roots also helps a lot (not obligated).</p>
        </div>

        <!-- Section 4: Ash PART 2 -->
        <div style="background-color: #3533324b; border-left: 4px solid #282827; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #000000; margin-top: 0;">Ash PART 2 (1-2 days)</h4>
            <p>Use your pots in this stage (with miasma mark and secret marks), you will need them.</p>
            <p>For early development, you should focus on the more ash and more miasma upgrades. It will not be possible to only focus on the ash tree, so again you will have to progress more on the ash and miasma boards + the ash mark from time to time (you have too little mps now to max the last 2 of the miasma mark). Around this time you must also go for the Heavenly roots by grinding cores, you need 1k greater cores on average. You should also upgrade it as much as you can bare.</p>
            <p>With this slow progression you will eventually reach high Qa Ash/s. Once you do, make sure to AFK on the Mark of Ash every now and then. Doing so can give your Ash gain a noticeable boost, helping you afford your next Ash board upgrade more quickly. With this extra Ash gain, you will eventually reach Sx Ash/s. With that you can also buy the first manual luck boost, which unlocks boosts for beast. At this point you should have Soot maxed and have the Blighted Star manual.</p>
            <p>Now, we will try to aim for beast milestone 175. For that you will have to afk beast a lot and upgrade your heavenly root to a high level. The “more beast core chance” upgrade in ash tree will help you with that. In the process you should be able to (almost) max your heavenly root for extra dmg and remnants. This will require some afk time! (I would advise you to do it overnight). To reach the 175 milestone you need a (maxed) heavenly root + dmg level 90. Luckily, the afk time does pay off, because your ash gain and mps will spike.</p>
            <p>After reaching the milestone you should stay on the mark of miasma for a bit (with pots ofc). This will give you even more mps and other stuff too. While staying on the mark you can do a lot of upgrades in the ash tree too, because of the x45 ash boost. Focus on more ash, more miasma and more mark bulk for now (mark of ash will also help a lot if you save up a bit). Doing that, you will reach enough mps to get the Quasar secret (get to 20 Td mps for that at least). While getting it, from time to time you have to head back to w3 to do more tree upgrades and/or marks. You will probably be able to fully max it after repeating this process and reaching 8/8 upgrades on more bulk in the ash tree.</p>
            <p>Right after (or even before) maxing the quasar secret you should be able to purchase the Markless challenge from the ash tree. Do it immediately, if you need help for it look at challenges guide. After the challenge afk the miasma mark for some time (don’t forget to use pots as mentioned earlier). You should also be able to buy the more ash II from the tree and every few minutes you can do the ash mark as well. Doing this you will eventually be able to max out Tombmire from the miasma mark. While getting it you should be able to get a couple of upgrades in more ash II already and have Ember from the ash mark also maxed out.</p>
            <p>Getting Anomalous roots right now will boost you a lot as well. You can also go for the Eclipse Plague Scripture whenever you want to afk for it, I would advise you to do it when it's below 1/10k (you can get there easily). After upgrading your Anomalous roots for a bit you can go for the more karma upgrades in the ash tree, with that you will get one more karma milestone (you can use jades if you want for karma but you don’t need it). With that you will easily get the secret upgrade at w3 (see secret upgrades). You will also effortlessly reach the 15 Ud for unlocking laws.</p>
        </div>

        <!-- Section 5: Laws -->
        <div style="background-color: #56aec24f; border-left: 4px solid #3ac3f0; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #3ac3f0; margin-top: 0;">Laws (5-6h)</h4>
            <p><b>Important notice:</b> You don't need jades for laws + you can already unlock a lot of things mentioned here before laws, in the guides I just mention what you absolutely need at the moment.</p>
            <p>You have finished one of the worst areas there is in the game, be happy now. The minimum for your first reset at laws board should be at least 5, I would advise you to wait till +100 laws because it will speed up your process majorly. Do the miasma and ash part again, reset at laws board a second time at around +500 laws. Do the miasma part once again and then you can do the Law body Tempering (now your miasma is finally automated). After that, just repeat the process, resetting your Laws once you reach at least ×10–×100 your previous reset (don’t forget to do the mark of ash once in a while). After getting around mid Td ash/s you can max Ashveil at the ash mark for a great boost. You can also buy the secret upgrades at world 2. After reaching around Sxd ash/s you will also be able to max Charfall from the ash mark.</p>
            <p>Repeating this process you will get pretty fast to Vg laws, here you can start doing the mark of laws. After doing it for a minute or so you normally should have enough stars for the secret upgrade at world 1 (behind the waterfall).</p>
            <p>Go back to w3 and max the board of laws. <i>(Optional step: go back to beast and afk for more cores to max Anomalous roots, it should be way easier right now and you can also increase your max stage for beast).</i> Normally you should have around 5 Sxd MPS (with pots). Make sure to use the pots while AFKing the Mark of Laws, as the mark scales exponentially and will start to spike after around 4 hours. <i>(this depends a lot on how much global marks you have, this could take way longer!)</i></p>
            <p>After maxing everything from the law mark (not absolute) your mps will be at Ocd, your realm will be at around 550. To get to w4 you will have to progress further at law board 2. You can also stand for short times on the ash and miasma mark to get a little boost. Here you can again do beast in the meantime to get more cores + dmg upgrades, use Heavenly roots to grind beast (it gives more dmg and remnants). With this you can reach the 200 beast milestone (+- dmg upgrade 99) and you can (almost) max Anomalous roots. When you are done with grinding beast, don’t forget to equip Anomalous roots again! While waiting on a law reset, you can stand on the manual button to get the Primordial Miasma Sutra. This should be around 1/10k now (so an average time of a bit more than an hour to get it).</p>
            <p>With some extra resets you will be able to reach w4. Don't try to upgrade the law board 2 more before entering w4. You will not be able to progress like that.</p>
        </div>
    `
},
// === WORLD GUIDES (4, 5 & 6) ===
// === WORLD GUIDES ===
"world4_guide": {
    title: "World 4 Guide",
    content: `
        <h3>World 4 Guide</h3>

        <!-- Section 1: Before Starting Faith -->
        <div style="background-color: #6498a33b; border-left: 4px solid #25cfe5; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #25cfe5; margin-top: 0;">Before Starting Faith</h4>
            <p>Before really starting with Faith, we recommend optimizing the earlier steps first:</p>
            <ul>
                <li><b>Codes:</b> Use all the codes in working codes lists for Pots, Jades, and Tickets.</li>
                <li><b>Interaction Rewards:</b> Make sure you've gotten all the boosts from liking the game, saving, etc.</li>
                <li><b>Sect:</b> Try joining a sect for daily Jades and boosts.</li>
                <li><b>Beast:</b> Go back to Beast in World 1. Here, try getting a good Bloodline and reach a higher Beast milestone.</li>
                <li><b>IMPORTANT:</b> Don't forget to equip your Bloodline using the backpack icon!</li>
                <li><b>Save Your Jades:</b> Jades will be very helpful for Miasma and Ash, so save them up.</li>
            </ul>
        </div>

        <!-- Section 2: Faith Part 1 -->
        <div style="background-color: #64683c3b; border-left: 4px solid #c5e525; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #c5e525; margin-top: 0;">Faith Part 1 (3-4 Hours)</h4>
            <p>Upon entering World 4, you'll have two new currencies: <b>Citizens</b> and <b>Faith</b>.</p>
            <p>You can use Citizens to generate Faith by converting them through the board to the left of the Upgrade Board. To start, prioritize <b>Citizens</b>, <b>Faith Conversion</b>, and <b>Mark Boosts</b>. Upgrade World Size as needed.</p>
            <p>Once you reach around Upgrade 11 on the Faith Board for Qi Density, you should be able to reach around <b>Realm #570 — Body Tempering</b>. This will help speed up the process significantly. Once you reach 50M+ Faith, max out <i>Absolute</i> on the Law Mark, <i>Hollowflame</i> on the Ash Mark, and <i>Abyss Plague</i> on the Miasma Mark, in that order, if you haven't already.</p>
            <p>After this, you should have around 4–5 Mark Boost upgrades on Faith Board II. Maxing the marks should only take around 5 minutes with your upgraded MPS. Make sure you have maxed the Mark Boost upgrade before proceeding.</p>
            <p>At this point, you should have either DVG or UVG MPS (Global Mark dependent). If you have DVG, begin opening the Soulfire Mark for the Deity Secret. Otherwise, increase your MPS to obtain the Soulfire Secret. The easiest way is to wait for a Weather Event—AFK the mark until it's maxed so Weather Events and Mark Milestones do the heavy lifting. Periodically return to W4 to upgrade and convert citizens.</p>
            <p>Once you have fully maxed the Faith Conversion upgrade and are in the trillions of Faith, focus on your <i>More Citizens</i> upgrade until reach upgrade 65, then save for the <b>3Qa Karma Milestone Upgrade</b>.</p>
            <p>Invest accumulated Jades into the karma upgrade on your Jadeboard to speed up progress. Head to World 3 and stand on the Ash Mark for ~2 minutes for a small boost. Head back to World 1 and try to get <b>Beast Milestone 225</b>. Equip Heavenly Roots if you lack Ancient or Chaos Roots to increase damage.</p>
            <p>Average cores needed: ~100,000 cores for Chaos Roots, ~33,333 cores for Ancient Roots (at ~900 cores/min / 54k cores/hour). Get Ancient or Chaos roots, max them, and achieve Beast Milestone 225.</p>
        </div>

        <!-- Section 3: Faith Part 2 -->
        <div style="background-color: #64683c3b; border-left: 4px solid #c5e525; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #c5e525; margin-top: 0;">Faith Part 2 (7 Hours)</h4>
            <p><b>Reminder:</b> Do NOT reset your laws before you obtain the Karma Milestone, because resetting it will <b>RESET YOUR KARMA</b>.</p>
            <p>After unlocking Disciple Training, stand on the Disciple Training button until reaching <b>Disciple Realm 30-35</b>. Perform upgrades on your Faith board and Disciple Training until getting around Dc Faith (remember Law Board II as well). This unlocks <b>Verdant Body Tempering at Realm 715</b>.</p>
            <p>Repeat the process of upgrading the Faith board, Laws board, and sitting on Disciple Realms until reaching Qavg Faith. Go back to the Mark of Ash until obtaining 1b Covenant (aim for ~100Tvg MPS). Next, head to the Mark of Laws for the secret <i>Judge</i>. After reaching ~1 Qavg MPS, return to the Mark of Ash for 10b Covenant to max Judge.</p>
            <p>Gather more Covenant, do more Faith and Law upgrades, and push Disciple Realm to reach Spd Faith. Open the Mark of Faith. If at ~50 Qavg with pots, consider getting Sanguine from the Essence Mark. Set citizens convert to 'Always' on the citizens board and open the Mark of Faith. Maxing the mark unlocks <b>Rogue Body Tempering at Realm 830</b>.</p>
            <p>Max the Faith board (and Law board if incomplete), return to the Mark of Ash, and max Covenant (use pots). Stand on the manual button while waiting to unlock Divinity. <i>(Don't forget to set citizens convert to max after unlocking Divinity!)</i></p>
        </div>

        <!-- Section 4: Divinity Part 1 -->
        <div style="background-color: #cc545457; border-left: 4px solid #e92424; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #e92424; margin-top: 0;">Divinity Part 1 (8 Hours)</h4>
            <p>Put remaining Jades into Divinity (saving 50 Jades for a reset later). Upgrade Divinity Board 1 to unlock <b>Royal Body Tempering at Realm #915</b>. Max the Faith board again and make more Divinity upgrades to tier up your World Tier (resets Faith board, re-max it each time).</p>
            <p>Buy Divinity Board 2 at Small Realm. Focus on getting both Mark Bulk upgrades from Divinity Board 2 (obtainable by Large Realm). Go to W1 and max <i>Sanguine</i> from the Mark of Essence using pots. Push to 10 Qa Divinity for the 2nd secret upgrade at W1 (buyable around Universe tier / ~30 T/s Divinity).</p>
            <p>Get a few "More Divinity" upgrades until reaching ~100 T/s Divinity. Do NOT reset your World Tier again until having enough Karma for the Karma Milestone. Reset your Jades and put them into Karma (divide remaining among citizens and divinity, x128 advised). Stand on the manual button for <i>Celestial Ash Sovereign Scripture</i>.</p>
            <p>After unlocking the Karma Milestone, get <b>Corrupt Body Tempering at Realm #970</b>. Progress into Divinity in W4 up to Multiverse-Outerverse, then buy and complete the <b>Origin Challenge</b> on the W3 challenges board to unlock Law Synthesization. Stand on marks for materials, focusing on lesser laws until Outerverse. This allows reaching <b>Realm #1000</b> to Reincarnate. (If struggling, push Beast Milestone 275, obtain Celestial Ash Sovereign Scripture, or progress in dungeons).</p>
        </div> `
},

// === WORLD GUIDES ===
"world5_guide": {
    title: "World 5 Guide",
    content: `
        <h3>World 5 Guide</h3>

        <!-- Section 1: Vitality -->
        <div style="background-color: #72f4864b; border-left: 4px solid #2aea27; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #2aea27; margin-top: 0;">Vitality</h4>
            <p>Vitality works as a generator chain: the lowest generator passively produces the generator above it, which feeds up to the top. The first generator generates Vitality, so output depends directly on your <b>Emerald Saplings</b>.</p>
            <p>Every 10 levels on a generator doubles its output (e.g., Level 10 doubles 100/sec to 200/sec, Level 20 to 400/sec). Priority: Reach multiples of 10 on the first upgrade. When 10 levels take too long, raise secondary generators to a similar level before pushing Vitality again.</p>
            <p><b>Vitality Board Priority:</b> Vitality &rarr; Qi &rarr; Mark Bulk. Aim for at least +15 Anima Reset before heavy outside investment. Max your Vitality Mark once generation hits ~50 QiD.</p>
        </div>

        <!-- Section 2: Anima -->
        <div style="background-color: #5c6cbb52; border-left: 4px solid #3532e7; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #3532e7; margin-top: 0;">Anima</h4>
            <p>Anima has two values:</p>
            <ul>
                <li><b>Anima Gain:</b> Amount received upon resetting.</li>
                <li><b>Anima Boost:</b> Permanent multiplier to Vitality from previous resets.</li>
            </ul>
            <p>Reset whenever current Gain is 2-3 suffixes higher than previous Gain (e.g., if previous reset was 1Qa, wait until Sx-Sp). Focus on <i>Vitality Boost</i> and <i>Anima Boost</i> for the first 5 resets, then invest into Qi.</p>
            <p>Reaching ~1610 Qi unlocks <b>Body Tempering</b>, automating Vitality Generation (buys in packs of 10). Note: This does not automate the board, so repurchase board upgrades after Anima resets.</p>
            <p>If MPS is ~Ocvg Marks/sec, farm the Ash Secret (<i>Voidcinder</i>). Once Anima hits ~Qivg, aim to reach <b>Beast Stage 300</b> to unlock the Anima Mark (requires 142 Beast Damage OR 139-140 Damage with Origin Law of Life Lv 3-4).</p>
        </div>

        <!-- Section 3: Flora Progression -->
        <div style="background-color: #9c51b845; border-left: 4px solid #cb3de4; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #cb3de4; margin-top: 0;">Flora Progression</h4>
            <p>Beast Stage 300 unlocks the <b>Parallel Dimension secret upgrade</b> (costs 1.5 Qisg Law), granting Divinity Board 3, 2x material chance, and 5 new World Tiers. Recommended Laws for Divinity 3:</p>
            <ul>
                <li>Lesser Law of Illusion & Perception — Level 10</li>
                <li>Greater Law of Alacrity — Level 9</li>
                <li>Origin Law of Death — Level 5</li>
                <li>Origin Law of Time — Level 1</li>
            </ul>
            <p>Divinity Board 3 unlocks Flora. Max the first 4 Anima upgrades first. Obtain the <b>Key secret</b> from the Insight Mark to unlock the Flora Tree in W5 (Requirements: Karma Milestone, ~1 Tg MPS, ~9B Luck, 15T Flora). The Key has ~1/14 Utg chance (~3-4 hours average).</p>
            <p><b>Flora Tree Unlocks:</b></p>
            <ul>
                <li><b>Leviathan Bloodline:</b> ~1/3M base chance. Max Roll Bulk (x53) first. Farm Lesser Cores on Beast Stage 109 or lower (~250% Drop Chance). Maxing requires ~10M Lesser Cores (last 3 upgrades: 1M, 2M, 4M).</li>
                <li><b>Erased Tome (Manual):</b> ~1 in 19.2k chance with Greater Law of Darkness maxed, 2x Gamepass, and Tree Luck bonuses. Get before Leviathan.</li>
                <li><b>Beast Stage 325 Requirements:</b> 150/150 Beast Damage, 10 Sg Karma Milestone, maxed Origin Law of Life, Erased Tome, Leviathan Bloodline.</li>
                <li><b>Flora Mark:</b> Available after purchasing 2nd Bloodline Bulk (5Dc) and Flora Bloom (250Dc). Recommended Flora Board level 79+.</li>
            </ul>
            <p><b>Upgrade Efficiency:</b> Every level of <i>More Flora</i> increases production by ~x1.75. Only buy <i>More Flora</i> if its cost is under 75% of the target upgrade. (Formula: <code>Target × 0.75</code>).</p>
        </div>

        <!-- Section 4: Final Tips -->
        <div style="background-color: #1e3328; border-left: 4px solid #2a9d8f; padding: 12px; border-radius: 4px;">
            <h4 style="color: #e9c46a; margin-top: 0;">Final Tips</h4>
            <ul>
                <li>If progress slows down, raise Jade Upgrades to at least Level 4.</li>
                <li>Max the Anima Mark before long Flora grinds.</li>
                <li>Remember to repurchase Vitality Board upgrades after resets.</li>
            </ul>
        </div>
    `
},

// === WORLD GUIDES ===
"world6_guide": {
    title: "World 6 Guide",
    content: `
        <h3>World 6 Guide</h3>

        <!-- Section 1: Hydra Types -->
        <div style="background-color: #2e2338; border-left: 4px solid #8b5cf6; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #a78bfa; margin-top: 0;">Hydra Types</h4>
            <ul>
                <li><b>Stage 1–10:</b> Yellow Hydra (No modifier)</li>
                <li><b>Stage 11–20:</b> Reinforced Hydra (No modifier)</li>
                <li><b>Stage 21–30:</b> Speedy Hydra (Cuts timer to 30s)</li>
                <li><b>Stage 31–40:</b> Shielded Hydra (5%/sec chance for 5s damage nullification shield)</li>
                <li><b>Stage 41–50:</b> Angered Hydra (25% chance per attack to freeze player for 5s)</li>
                <li><b>Stage 51–60:</b> Experienced Hydra (25% miss chance on player attacks)</li>
                <li><b>Stage 61–70:</b> Angelic Hydra (Fully heals once at 50% HP)</li>
                <li><i>Note: From Speedy to Angelic, all modifiers stack.</i></li>
                <li><b>Stage 71–80:</b> Almighty Hydra (Single buff: Heals 10% max HP every second)</li>
            </ul>
        </div>

        <!-- Section 2: Evolutions -->
        <div style="background-color: #382822; border-left: 4px solid #d97706; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #f59e0b; margin-top: 0;">Evolutions</h4>
            <ul>
                <li><b>Beast Stage 10:</b> Unlocks Hydra Evolution (Crit Chance) & Stages 11–20 (25k Tian)</li>
                <li><b>Beast Stage 20:</b> Unlocks Crit Hit DMG & Stages 21–30 (250m Tian)</li>
                <li><b>Beast Stage 30:</b> Unlocks Bleed & Stages 31–40 (10b Tian)</li>
                <li><b>Beast Stage 40:</b> Unlocks Rewind & Stages 41–50 (2.5T Tian)</li>
                <li><b>Beast Stage 50:</b> Unlocks Relic Strength & Stages 51–60 (5qa Tian)</li>
                <li><b>Beast Stage 60:</b> Unlocks Berserk & Stages 61–70 (500qa Tian)</li>
                <li><b>Beast Stage 70:</b> Unlocks Auto-beast & Stages 71–80 (100qi Tian)</li>
            </ul>
        </div>

        <!-- Section 3: Souls Progression -->
        <div style="background-color: #222a38; border-left: 4px solid #4ea8de; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #4ea8de; margin-top: 0;">Souls Progression</h4>
            <p><b>Pre-requisites:</b> Souls Jade upgrade at Level 5+; ~2400 Body Tempering to unlock Soul Mark.</p>

            <p><b>First Angel Milestone (10 Angels):</b></p>
            <ol>
                <li>Save souls for a 6 Angels reset, then a 4 Angels reset.</li>
                <li><i>Tip: Prioritize Souls Boost and Spawn Speed upgrades.</i></li>
            </ol>

            <p><b>Second Angel Milestone:</b></p>
            <ol>
                <li>Reset for 40 Angels 3 times, then 30 Angels.</li>
                <li>Save 1M Souls &rarr; Open Soul Mark (use Luck Potion).</li>
                <li>Save 2M Souls &rarr; Perform Floor Prestige 1.</li>
                <li>Save 10M Souls &rarr; Open Soul Mark (Luck Potion).</li>
                <li>Save 30M Souls &rarr; Open Soul Mark (Luck Potion).</li>
                <li>Save 30M Souls &rarr; Open Soul Mark (Turn OFF Mark Luck in settings).</li>
                <li>Reset for 850 Angels.</li>
            </ol>

            <p><b>Third Angel Milestone (1k Angels):</b></p>
            <ol>
                <li>Get back Floor Prestige 1.</li>
                <li>Save 1B Souls &rarr; Open Soul Mark (Luck Potion).</li>
                <li>Save 5B Souls &rarr; Floor Prestige 2.</li>
                <li>Save 1T Souls &rarr; Open Soul Mark (Luck Potion).</li>
                <li>Save 100T Souls &rarr; Floor Prestige 3.</li>
                <li>Save 10Qa Souls &rarr; Open Soul Mark (Mark Luck OFF).</li>
                <li>Save 5Qi Souls &rarr; Floor Prestige 4.</li>
            </ol>

            <p><b>Late Souls:</b></p>
            <ol>
                <li>Perform Angel reset.</li>
                <li>Get back Floor Prestige 4.</li>
                <li>Max out the Soul Mark.</li>
                <li>Save 1Sp Souls &rarr; Floor Prestige 5.</li>
                <li>Buy remaining Souls board upgrades.</li>
            </ol>
        </div>
    `
},

// === WORLD GUIDES ===
"world7_guide": {
    title: "World 7 Guide",
    content: `
        <h3>World 7 Guide</h3>

        <!-- Section 1: Before Starting World 7 -->
        <div style="background-color: #222a38; border-left: 4px solid #4ea8de; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #4ea8de; margin-top: 0;">Before Starting World 7</h4>
            <ul>
                <li>Get everything from previous worlds (but flora qi upgrade)</li>
                <li>Might buy bulk and speed path buffs in shop (also pots and gps if youre rich)</li>
            </ul>
        </div>

        <!-- Section 2: Before 1st Constellation Progress -->
        <div style="background-color: #23342d; border-left: 4px solid #40916c; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #52b788; margin-top: 0;">Before 1st Constellation Progress</h4>
            <p>Upon entering the world 7 start meditation and gathering dao</p>
            <p>Upgrade dao gain until you can consistently open the dao path</p>
            <p><b>NOTE:</b> dao path is just a new type of mark (you will not keep normal bulk, etc.)</p>
            <p><b>TIP:</b> meditate while opening the mark and click on gather dao</p>
            <p><b>TIP:</b> you can upgrade path bulk,speed and luck on the dao board</p>
            <p>Keep opening dao path and upgrading dao until you get to maxed dao gain upgrade</p>
            <p>Get 1 abyssal mark from dao path and upgrade meridian bulk on the dao board</p>
            <p>Get spleen meridian on the meridian board (works as manuals)</p>
            <p>Buy all the dao world boosts (board next to meridians)</p>
            <p>Max every new thing you got from meridians but divinity world tier (meridians increased all your currency upgrades y 50 up to w4)</p>
            <p>For getting laws first get w4 board upgrades maxed (laws are not automated btw)</p>
            <p>Complete the black tortoise constellation</p>
            <p>Get back to world 7 (will take awhile)</p>

            <p><b>NOTE: GENERAL TIPS TO GET BACK TO W7</b></p>
            <ul>
                <li>Do beast milestones</li>
                <li>Turn off the mark luck to get impossible marks</li>
                <li>Buy secret upgrades</li>
                <li>Do body tempers</li>
                <li>Check #📘┇guides  if needed</li>
            </ul>
        </div>

        <!-- Section 3: After Tortoise Constellation Progression -->
        <div style="background-color: #382822; border-left: 4px solid #d97706; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #f59e0b; margin-top: 0;">After Tortoise Constellation Progression</h4>
            <p>When you got to w7 save up 250Qa dao and buy dao return challenge</p>
            <p>Complete dao return challenge Dao return guideWorld 3</p>
            <p>After you got that challenge done go to w7 and save up enough dao to max all dao upgrades but qi</p>
            <p>Max dao path</p>
            <p>Get kidney meridian</p>
            <p>Grind for tiger constellation ( dont forget to use dao world boosts)</p>
        </div>

        <!-- Section 4: After Tiger Constellation Progress -->
        <div style="background-color: #2e2338; border-left: 4px solid #8b5cf6; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #a78bfa; margin-top: 0;">After Tiger Constellation Progress</h4>
            <p>Get to w7 again</p>
            <p><b>NOTE:</b> W7 has nothing new to do now but getting back to it and doing a constellations so guide will longer have steps</p>

            <p><b>TIPS ON LAST CONSTEALLTIONS:</b></p>
            <ul>
                <li>Meditate for dao buffs</li>
                <li>Dont forget about dao path</li>
                <li>Dont forget about world boosts</li>
            </ul>

            <p>As a last step of w7 do Astral reincarnation</p>
            <p>After astral reincarnation get dungeon qi upgrade to 105-110 and everything else that gives qi and enter W8</p>
            <p>Challenges will be completed in W8</p>

        <!-- Section 1: WHAT CONSTELLATIONS DONT RESET -->
        <div style="background-color: #222a38; border-left: 4px solid #4ea8de; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #4ea8de; margin-top: 0;">WHAT CONSTEALLTIONS DONT RESET?</h4>
            <ul style="margin-top: 0;">
                <li>skills</li>
                <li>skill upgrades</li>
                <li>shop tickets</li>
                <li>shop purchases</li>
                <li>challenges</li>
                <li>bloodlines</li>
                <li>Hydra relics</li>
                <li>manuals</li>
                <li>skill tree additions.</li>
            </ul>
        </div>

        <!-- Section 2: CONSTELLATIONS BUFFS -->
        <div style="background-color: #23342d; border-left: 4px solid #40916c; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #52b788; margin-top: 0;">CONSTELLATIONS BUFFS:</h4>
            <ul style="margin-top: 0;">
                <li>Tortoise -x10 currencies used to make it except Dao and x1k Qi</li>
                <li>Tiger -x25 currencies used to make it except Dao and x2k Qi</li>
                <li>Bird -x50 currencies used to make it except Dao and x3.5k Qi</li>
                <li>Dragon -x100 currencies used to make it including Dao and x5k Qi</li>
            </ul>
        </div>
    `
},

// === WORLD GUIDES ===
"world8_guide": {
    title: "World 8 Guide",
    content: `
        <h3>World 8 Guide</h3>

        <!-- Section 1: Before Mastery Progression -->
        <div style="background-color: #222a38; border-left: 4px solid #4ea8de; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #4ea8de; margin-top: 0;">Before Mastery Progression</h4>
            <p>Upon entering world 8 stand on the button to gain strength</p>
            <p>For that strength start researching cultiavtion arts</p>
            <p><b>NOTE:</b> you can not reserach an art while previous one have not been researched yet</p>
            <p>Research arts until you get to the shadow veil art</p>
            <p>Now you have unlcoked art mastery</p>
        </div>

        <!-- Section 2: Art Mastery 1 -->
        <div style="background-color: #23342d; border-left: 4px solid #40916c; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #52b788; margin-top: 0;">Art Mastery 1</h4>
            <p>Buy all alvailable masteries to help you save up 650K strength</p>
            <p>Save up 650K strength and buy art 6 in masteries</p>
            <p>Save up 1.5M strength and reserach immortal rein art</p>
            <p>Save up 3M strength and begin art mastery 2</p>
        </div>

        <!-- Section 3: Art Mastery 2 -->
        <div style="background-color: #382822; border-left: 4px solid #d97706; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #f59e0b; margin-top: 0;">Art Mastery 2</h4>
            <p>Save up 3.5M strength to buy 3x strength mastery</p>
            <p>Save up 15M strength and buy unlock "The strongest cultivator" manual mastery</p>
            <p>Get "The strongest cultiator manual"</p>
            <p>Save up 100M strength and buy mastery</p>
            <p>Save up 250M strength and buy mastery</p>
            <p>Get back to w7 and complete origin of creation challenge ⁠⁠</p>
            <p>Research dao shattering art</p>
        </div>

        <!-- Section 4: Art Mastery 3 -->
        <div style="background-color: #2e2338; border-left: 4px solid #8b5cf6; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #a78bfa; margin-top: 0;">Art Mastery 3</h4>
            <p>Buy full 3rd mastery tree</p>
            <p>Go back to world 7 and complete origin of chaos challenge ⁠</p>
            <p>Research inept origin art</p>
        </div>

        <!-- Section 5: Art Mastery 4 & 5 -->
        <div style="background-color: #3b2326; border-left: 4px solid #dc2626; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #ef4444; margin-top: 0;">Art Mastery 4 & 5</h4>
            <p><b>Art Mastery 4:</b></p>
            <p>Fully buy 4th mastery tree</p>
            <p>Enter challenge named origin of space in w7</p>

            <p><b>Art Mastery 5:</b></p>
            <p>Research wood heaven art</p>
            <p>Fully buy art mastery 4</p>
            <p>Enter origin of time challenge in w7</p>
        </div>
    `
},

// === CHALLENGES GUIDES ===
"challenge1_guide": {
    title: "Challenge 1 Guide",
    content: `
        <h3>Challenge 1 Guide</h3>

        <!-- Section 1: Challenge Overview & Strategy -->
        <div style="background-color: #222a38; border-left: 4px solid #4ea8de; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #4ea8de; margin-top: 0;">Strategy & Progression</h4>
            <p>Prioritise getting your insight and essence up.</p>
            <p>As soon as you reach a body tempering goal reset. Get the essence speed and multis up before you start shifting your main focus to the luck and qi multipliers.</p>
            <p>For insight prioritise getting the more insight upgrade up as well.</p>
            <p>Ignore any mark upgrades.</p>
            <p>The breakthrough luck potion (purple one) does work in the challenge.</p>
            <p>For me the challenge took around 1.5-2hours.</p>
        </div>
    `
},

// === CHALLENGES GUIDES ===
"challenge_origin_guide": {
    title: "Origin Challenge Guide",
    content: `
        <h3>Origin Challenge Guide</h3>

        <!-- Section 1: Overview & Early Steps -->
        <div style="background-color: #222a38; border-left: 4px solid #4ea8de; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #4ea8de; margin-top: 0;">Overview & Early Steps</h4>
            <p>Unlocked at Divinity Board 2 in World 4.</p>
            <p>Start from getting realm 30 and 45 body temperings, then prioritise getting your insight and essence up.</p>
            <p>Get the essence speed and multis up before you start shifting your main focus to the luck and qi multipliers.</p>
            <p>For insight prioritise getting the more insight upgrade up as well.</p>
            <p>Open marks for boost. Repeat that until you get to realm 108.</p>
        </div>

        <!-- Section 2: For 108-110 Bottleneck -->
        <div style="background-color: #382822; border-left: 4px solid #d97706; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #f59e0b; margin-top: 0;">For 108-110 Bottleneck</h4>
            <ol>
                <li>Max out everything that can be maxed</li>
                <li>Upgrade soulfire qi gain to at least level 21 (remember to upgrade essence gain when it costs less than or close to qi gain, it boosts soulfire gain)</li>
                <li>Get beast qi upgrade and beast stage 25+</li>
                <li>Afk on soulfire mark to get at least 1 everflame, more if you're lucky</li>
                <li>Temper your body at 110</li>
            </ol>
        </div>

        <!-- Section 3: For Beyond 110 -->
        <div style="background-color: #23342d; border-left: 4px solid #40916c; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #52b788; margin-top: 0;">For Beyond 110</h4>
            <ol>
                <li>Reach 250 karma</li>
                <li>Buy soulfire karma upgrade</li>
                <li>Get more soulfire (until it slows down)</li>
                <li>Get around 100k-300k karma and buy karma marks</li>
                <li>Get 1m karma, then also spend it on marks</li>
                <li>Get more soulfire yet again</li>
                <li>Max out karma reckoning mark (200 marks)</li>
                <li>Get 50b karma and spend it on marks (if you get samsara you're lucky, if not you'll need to grind a bit more in later steps)</li>
                <li>Get beast stage to 35+</li>
                <li>Afk on soulfire mark until you finish the challenge</li>
            </ol>
        </div>

        <!-- Section 4: Addition for Ones Stuck on 128-130 -->
        <div style="background-color: #3b2326; border-left: 4px solid #dc2626; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #ef4444; margin-top: 0;">Addition for Ones Stuck on 128-130 (Get Everything Below)</h4>
            <ul>
                <li>Soulfire qi and luck upgrade before need 500+ Dec of soulfire.</li>
                <li>50+ everflame. (Soulfire mark)</li>
                <li>50b karma milestone.</li>
                <li>200 reckoning mark and all befores. (Karma mark)</li>
                <li>Beast stage at 40</li>
            </ul>
            <p><b>Side Note:</b> Potions dont work in this challenge. Challenge usually takes 3-4 hours.</p>
        </div>
    `
},

// === CHALLENGES GUIDES ===
// === WORLD / CHALLENGE GUIDES ===
"challenge_daoreturn_guide": {
    title: "Challenge 3 Guide",
    content: `
        <h3>Challenge 3 Guide</h3>

        <!-- Section 1: Prerequisites & Overview -->
        <div style="background-color: #222a38; border-left: 4px solid #4ea8de; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #4ea8de; margin-top: 0;">Prerequisites & Overview</h4>
            <p><b>BEFORE STARTING:</b> MAKE SURE YOU HAVE ALL DUNGEON TREE UPGRADES, THEY HELP ALOT. MAKE SURE YOU HAVE LEVI SELECTED YOU CANT CHANGE MID CHALLENGE.</p>
        </div>

        <!-- Section 2: Early Steps & Realm Progression -->
        <div style="background-color: #23342d; border-left: 4px solid #40916c; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #52b788; margin-top: 0;">Early Steps & Realm Progression</h4>
            <p>As soon as you start, go into dungeon, grab all the tree upgrades and the board upgrades, and push directly to realm 30. You dont need to insight reset for this.</p>
            <p>You may even be able to get away without insight resetting for 45 as well, but do one or two if you need to to hit 45. Dont interact with essence yet.</p>
            <p>Pull marks as you get the currency, interact with essence after 45 or next temper, and do the usual getting soulfire asap to get the auto insight auto qi etc. This is made super easy with Leviathan so you will be able to get the initial marks fairly quickly.</p>
            <p>Get to beast 50, nothing is stopping you from getting this asap and its the most you need for the entire challenge. Do it when you want to afk or if ur waiting for a currency and can zoom out to do. Getting beast milestone 50, you need 29/75 damage.</p>
        </div>

        <!-- Section 3: Karma & Key Marks -->
        <div style="background-color: #382822; border-left: 4px solid #d97706; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #f59e0b; margin-top: 0;">Karma & Key Marks</h4>
            <p>Get Karma up to at least 1-2m then start puling marks, then get 50b and hope you get samasara.</p>
            <p>You basically need to get Samasara, True sight, Eternal to progress smoothly in w2 and you will need 1 or 2 of these to make it to 135 in the first place. Getting Samsara first is the easiest, which makes true sight easier, which makes eternal easier. You only need 1 copy of each as well as that gives the max star, mark luck/speed/bulk boosts. You can max these later for more luck to hit 170.</p>
        </div>

        <!-- Section 4: World 2 & End Game -->
        <div style="background-color: #2e2338; border-left: 4px solid #8b5cf6; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #a78bfa; margin-top: 0;">World 2 & End Game</h4>
            <p>Once you get to w2 you just do the usual grind stars to like 10-100m, then do marks, then do 10b, then marks, then 100-1t, then marks etc. You basically need to get Nebula unlocked to get to 170 and once ur 170 the challenge is basically ezpz.</p>
            <p>Dont forget to try for Nirvana when you have a reasonable MPS, you cna try to get it before 170. I didnt cause i waited for the karma boost from nebula marks.</p>
        </div>

        <!-- Section 5: Reference Screenshots (At the very end) -->
        <div style="background-color: #1a1e24; border: 1px solid #333; padding: 12px; margin-top: 16px; border-radius: 4px;">
            <h4 style="color: #e2e8f0; margin-top: 0; text-align: center;">Reference Screenshots</h4>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
                <img src="images/star_upgrades.png" alt="Star Upgrades" style="max-width: 100%; border-radius: 6px; border: 1px solid #444;" />
                <img src="images/nebula_upgrades.png" alt="Nebula Upgrades" style="max-width: 100%; border-radius: 6px; border: 1px solid #444;" />
                <img src="images/mark_of_stars.png" alt="Mark of Stars" style="max-width: 100%; border-radius: 6px; border: 1px solid #444;" />
                <img src="images/mark_of_nebulae.png" alt="Mark of Nebulae" style="max-width: 100%; border-radius: 6px; border: 1px solid #444;" />
                <img src="images/karma_milestones.png" alt="Karma Milestones" style="max-width: 100%; border-radius: 6px; border: 1px solid #444;" />
            </div>
        </div>
    `
},

// === CHALLENGES GUIDE ===
"challenges_origin_w7_guide": {
    title: "Origin Challenges Guide",
    content: `
        <h3>Origin Challenges Guide</h3>

        <!-- Section 1: Origin of Creation -->
        <div style="background-color: #1f2937; border-left: 4px solid #3b82f6; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #60a5fa; margin-top: 0;">ORIGIN OF CREATION</h4>
            <p>Well pretty much nothing to explain here</p>
            <p>Go into dungeon and complete first dungeon</p>
            <p>Buy upgrades for dmg,spiritstones ,etc.</p>
            <p>Repeat until finished</p>
        </div>

        <!-- Section 2: Origin of Chaos -->
        <div style="background-color: #1f2937; border-left: 4px solid #f59e0b; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #fbbf24; margin-top: 0;">ORIGIN OF CHAOS</h4>
            
            <h5 style="color: #4ea8de; margin-bottom: 6px;">Early progression</h5>
            <ul style="margin-top: 0;">
                <li>Get body temper at realm 30</li>
                <li>Get to realm 35</li>
                <li>Go into dungeons and max dungeon 1 upgrade tree</li>
                <li>Get 45 realm body temper</li>
                <li>Get your essence to 100 billions (clear and piercing marks from mark of insight will help)</li>
                <li>Open essence mark and buy upgrades until you get essence into septillions</li>
                <li>Buy essence upgrade board upgrades and temper you body at realm 85</li>
            </ul>

            <h5 style="color: #f59e0b; margin-bottom: 6px;">Mid progression</h5>
            <ul style="margin-top: 0;">
                <li>Do soulfire reset until you have 100M soulfire</li>
                <li>Upgrade soulfire qi and luck upgrades</li>
                <li>Temper your body at 100</li>
                <li>Reach 1T soulfire (soulfire mark will help)</li>
                <li>Get deepseeing marr from insight mark to 20</li>
                <li>Get nucleus mark from essence mark to 15</li>
                <li>Reset for soulfire to get 10T and buy qi and luck upgrades</li>
                <li>Temper your body at 110</li>
                <li>Get 1K karma</li>
                <li>Get 1Sp soulfire and buy karma boosted by soulfire upgrade</li>
                <li>Get nucleus mark (essence),deepseeing mark (insight) and pyre mark (soulfire) maxed</li>
                <li>Set your soulfire focus to luck</li>
                <li>Get beast apex pursuit updgrade and turtle bloodline to lvl 4 and get beast stage 25</li>
            </ul>

            <h5 style="color: #52b788; margin-bottom: 6px;">End progression</h5>
            <ul style="margin-top: 0;">
                <li>Get 1M karma</li>
                <li>open karma mark</li>
                <li>Get farsight mark from insight</li>
                <li>Max inferno mark in soulfire</li>
                <li>Reset for soulfire</li>
                <li>Keep getting karma and buying karma mark til you max balance mark</li>
                <li>Get 50B karma</li>
                <li>Get beast stage 50 (damage focus dont forget)</li>
            </ul>
        </div>

        <!-- Section 3: Origin of Space -->
        <div style="background-color: #1f2937; border-left: 4px solid #8b5cf6; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #a78bfa; margin-top: 0;">ORIGIN OF SPACE</h4>
            
            <h5 style="color: #4ea8de; margin-bottom: 6px;">Pre world 2 progression</h5>
            <p>Reach world 2 (it will be pretty easy)</p>
            <p><b>Make sure that you get all the stuff below before entering world 2 :</b></p>
            <ol style="margin-top: 0;">
                <li>50 Qi karma milestone</li>
                <li>Qilin bloodline at least level 6</li>
                <li>Beast stage 100 (soulfire focus will help)</li>
                <li>Farsight from mark of insight maxed</li>
                <li>Prism from mark of essence maxed</li>
                <li>Samsara from mark of karma maxed</li>
                <li>Everflame from soulfire maxed (go for this after all previous steps)</li>
                <li>In dungeon 2 get upgrade tree to the point when you buy x1.75 nebula upgrade (go after all of the previous steps)</li>
            </ol>

            <h5 style="color: #a78bfa; margin-bottom: 6px;">World 2 progression</h5>
            <ul style="margin-top: 0;">
                <li>Get Qa stars</li>
                <li>Open mark of stars until you get 5T spark</li>
                <li>Get 5Sp stars</li>
                <li>Unlock nebula</li>
                <li>Reset for nebula and upgrade nebula and stars</li>
                <li>Repeat  nebula reset until you get nebula,stars upgrade maxed and mark boost upgrade to 30</li>
                <li>Open nebula mark until you get 10T mistglow</li>
                <li>Open mark of stars until you get 15 radiant</li>
                <li>Temper your body at 170</li>
                <li>Get everything back</li>
                <li>Get  mark boost upgrade to 36</li>
                <li>Open nebula mark until you get 200T mistglow</li>
                <li>Open mark of stars until you get celestial</li>
                <li>Open insight mark until you get truesight maxed</li>
                <li>Open mark of essence until you get eternal maxed</li>
                <li>Open mark of karma until you max nirvana</li>
                <li>Get 1No karma milestone</li>
                <li>Open mark of stars until you get supernova</li>
                <li>Open nebula mark until you max mistglow</li>
                <li>Fully max mark of stars</li>
                <li>Open nebula mark until you get 12 novashard</li>
                <li>Reset for nebula</li>
                <li>Unlock quasar</li>
                <li>Click practice button in quasar and wait for 20 proficiency</li>
            </ul>
        </div>
    `
},

// === DUNGEONS OVERVIEW & DATA GUIDE ===
"dungeons_guide": {
    title: "Dungeons Guide",
    content: `
        <h3>Dungeons Guide</h3>

        <!-- Section 1: Overview & Unlock -->
        <div style="background-color: #222a38; border-left: 4px solid #4ea8de; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #4ea8de; margin-top: 0;">OVERVIEW & HOW TO UNLOCK</h4>
            <p>Dungeons include dungeons upgrade board with spiritstone as main currnecy.Dungeons also include upgarde tree,Gear and ClassesCurrently there are  6 dungeons which require realm 60 , 145 ,350,850,1600 and 2300 to enter.</p>
            <p><b>HOW TO UNLOCK:</b> Reach realm 60 and teleport through teleport menu</p>
            <p><b>MAIN CURRENCY:</b> Main dungeon currency is spirit stone which allows you to buy upgrades like more dmg,more attack speed,more spirit stones and more qi</p>
        </div>

        <!-- Section 2: Dungeon Drops & Gear System -->
        <div style="background-color: #23342d; border-left: 4px solid #40916c; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #52b788; margin-top: 0;">DUNGEON DROPS & GEAR</h4>
            <p>Upon killing npcs in dungeon you can get different gears which will boost your stats</p>
            <p>Gears will appear in gears menu next to classes and upgrade tree</p>
            <p>You can get chest,weapon,helmet,boots and amulet</p>
            <p>Gears have different rarities, lowest being F and highest being SSS ( higher stage = better rarities)</p>
            <p>Higher lvl = higher buff and more stats</p>

            <h5 style="color: #52b788; margin-bottom: 6px;">STATS BREAKDOWN</h5>
            <ul style="margin-top: 0;">
                <li><b>Critical Chance:</b> Chance for a dungeon hit to crit (capped at 80% total).</li>
                <li><b>Critical Damage:</b> Raises crit damage above its base 2× multiplier.</li>
                <li><b>Dungeon Damage:</b> Increases all damage dealt in dungeon.</li>
                <li><b>Qi Boost:</b> Increases qi gain.</li>
                <li><b>Dungeon currency:</b> Increases all dungeon currency gain.</li>
                <li><b>Artifacts drop chance:</b> Increases chance to get a gear.</li>
                <li><b>Spiritstone Gain:</b> Increases Spiritstones earned from any clear.</li>
                <li><b>Movement speed:</b> Increases movement speed.</li>
                <li><b>Luck:</b> ???</li>
            </ul>

            <h5 style="color: #52b788; margin-bottom: 6px;">GEAR STATS</h5>
            <p><b>Weapon Stats:</b></p>
            <ol style="margin-top: 0;">
                <li>Critical Chance</li>
                <li>Critical Damage</li>
                <li>Dungeon Damage</li>
                <li>Qi Boost</li>
                <li>Dungeon currency</li>
                <li>Artifacts drop chance</li>
            </ol>

            <p><b>Helmet Stats:</b></p>
            <ol style="margin-top: 0;">
                <li>Spiritstone Gain</li>
            </ol>

            <p><b>Chest Stats:</b></p>
            <ol style="margin-top: 0;">
                <li>Qi Boost</li>
                <li>Spiritstone gain</li>
                <li>Dungeon damage</li>
                <li>Dungeon currency</li>
                <li>Artifact drop chance</li>
            </ol>

            <p><b>Boots Stats:</b></p>
            <ol style="margin-top: 0;">
                <li>Movement speed</li>
                <li>Luck</li>
                <li>Qi boost</li>
                <li>Artifact drop chance</li>
                <li>Critical chance</li>
            </ol>

            <p><b>Amulet Stats:</b></p>
            <ol style="margin-top: 0;">
                <li>Movement speed</li>
                <li>Qi boost</li>
                <li>Luck</li>
                <li>Spiritstone gain</li>
                <li>Dungeon damage</li>
            </ol>
        </div>

        <!-- Section 3: Classes -->
        <div style="background-color: #382822; border-left: 4px solid #d97706; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #f59e0b; margin-top: 0;">CLASSES</h4>
            <ul style="margin-top: 0;">
                <li>Porter (50%)  - +5 Movement Speed</li>
                <li>Laborer ( 26%) - 2x Spirit Stones</li>
                <li>Beggar (15%) - 2x Attack Speed</li>
                <li>Jester (5%) - increased Attack Range</li>
                <li>Bandit( 2.4%) -  3x Spirit Stones & Damage</li>
                <li>Cultivator  (1.2%) - 4x Attack Speed | 4x Spirit Stones | 5x Damage</li>
                <li>Merchant (0.2%) - 6x Spirit Stones | 5x Damage & Attack Speed</li>
                <li>Young Lord (0.1%) -  8x Spirit Stones | 7.5x Damage|7x Attack Speed |1.5x Dungeon Currency</li>
            </ul>
        </div>

        <!-- Section 4: Ore Upgrades Tree -->
        <div style="background-color: #2e2338; border-left: 4px solid #8b5cf6; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #a78bfa; margin-top: 0;">DUNGEON ORE UPGRADES</h4>

            <h5 style="color: #a78bfa; margin-bottom: 6px;">COAL (dungeon 1)</h5>
            <ul style="margin-top: 0;">
                <li>x3 qi - 5 coal</li>
                <li>x1.5 ores - 10 coal</li>
                <li>x2 essence - 20 coal</li>
                <li>x2 soulfire - 35 coal</li>
                <li>x1.5 remnants - 50 coal</li>
                <li>x1.1 ore chance - 100 coal</li>
            </ul>

            <h5 style="color: #a78bfa; margin-bottom: 6px;">IRON (dungeon 2)</h5>
            <ul style="margin-top: 0;">
                <li>x5 luck - 35 iron</li>
                <li>x2.5 starts - 45 iron</li>
                <li>x1.5 mark bulk - 60 iron</li>
                <li>x1.75 nebulae - 75 iron</li>
                <li>x1.2 ore chance - 85 iron</li>
                <li>x2 quasar - 100 iron</li>
            </ul>

            <h5 style="color: #a78bfa; margin-bottom: 6px;">BRONZE (dungeon 3)</h5>
            <ul style="margin-top: 0;">
                <li>+10 main upgrade caps - 35 bronze</li>
                <li>x15 qi - 50 bronze</li>
                <li>x2 miasma - 65 bronze</li>
                <li>x1.5 mark speed - 80 bronze</li>
                <li>x2 ash - 100 bronze</li>
                <li>x1.5 ore drop - 130 bronze</li>
                <li>x2 laws - 150 bronze</li>
                <li>x1.3 ore chance - 180 bronze</li>
            </ul>

            <h5 style="color: #a78bfa; margin-bottom: 6px;">SILVER (DUNGEON 4)</h5>
            <ul style="margin-top: 0;">
                <li>+10 main upgrade caps - 45 silver</li>
                <li>x20 qi - 70 silver</li>
                <li>x2 faith - 95 silver</li>
                <li>x1.5 mark speed - 110 silver</li>
                <li>x2 citizens - 140 silver</li>
                <li>x1.5 ore drop - 175 silver</li>
                <li>x2 divinity - 215 silver</li>
                <li>x1.4 ore chance - 260 silver</li>
            </ul>

            <h5 style="color: #a78bfa; margin-bottom: 6px;">GOLD (DUNGEON 5)</h5>
            <ul style="margin-top: 0;">
                <li>+10 dungeon board caps - 85 gold</li>
                <li>x10 qi - 110 gold</li>
                <li>x3 vitality - 150 gold</li>
                <li>x1.4 ore chance - 200 gold</li>
                <li>x4 anima - 230 gold</li>
                <li>x1.4 ore drop - 280 gold</li>
                <li>x5 flora - 310 gold</li>
            </ul>

            <h5 style="color: #a78bfa; margin-bottom: 6px;">PLATINUM (DUNGEON 6)</h5>
            <ul style="margin-top: 0;">
                <li>+10 main upgrade caps - 70 platinum</li>
                <li>x50 qi - 90 platinum</li>
                <li>x2 tian - 110 platinum</li>
                <li>x2 mark luck - 125 platinum</li>
                <li>x2.5 souls - 160 platinum</li>
                <li>x1.6 ore drop - 200 platinum</li>
                <li>x1.5 soul light boost -  215 platinum</li>
                <li>x1.5 ore chance - 350 platinum</li>
            </ul>
        </div>
    `
},

// === BEAST BLOODLINES GUIDE ===
"constellation_requirements_guide": {
    title: "Constellation Requirements",
    content: `
        <h3>Beast Bloodlines Guide</h3>

        <!-- Section 1: TURTLE -->
        <div style="background-color: #222a38; border-left: 4px solid #4ea8de; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #4ea8de; margin-top: 0;">TURTLE</h4>
            <ul style="margin-top: 0;">
                <li>10T dao + 2.5E482 INSIGHT</li>
                <li>35T dao + 5 OCTG ESSENCE</li>
                <li>100T dao + 100 TG Soulfire</li>
                <li>175T dao + 100 TVG Stars</li>
                <li>225T dao + 100 SXVG Nebula</li>
                <li>300T dao + 50 SPTG Quasar</li>
                <li>395T dao + 500 SPVG Miasmar</li>
                <li>500T dao + 1.5 NOTG Ash</li>
                <li>625T dao + 1 SPSG Law</li>
                <li>750T dao + 1.5 QISG Faith</li>
                <li>1 QA dao + 15 SXVG Divinity</li>
                <li>2.5 QA dao + 5E830 Vitality</li>
            </ul>
        </div>

        <!-- Section 2: TIGER -->
        <div style="background-color: #382822; border-left: 4px solid #d97706; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #f59e0b; margin-top: 0;">TIGER</h4>
            <ul style="margin-top: 0;">
                <li>25 QA dao + 5E485 insight</li>
                <li>55 QA dao + 525 OCTG essence</li>
                <li>115 QA dao + 450 TG soulfire</li>
                <li>200 QA dao + 250 TVG stars</li>
                <li>285 QA dao + 250 SXVG nebulae</li>
                <li>375 QA dao + 150 SPTG quasar</li>
                <li>500 QA dao + 15 OCVG miasma</li>
                <li>650 QA dao + 18 NOTG ash</li>
                <li>795 QA dao + 15 SPSG laws</li>
                <li>1 QI dao + 10 QISG faith</li>
                <li>2 QI dao + 150 SXVG divinity</li>
                <li>4 QI dao + 7.5E835 vitality</li>
                <li>10 QI dao + 50 UNG anima</li>
                <li>25 QI dao + 1.5 SPOG flora</li>
            </ul>
        </div>

        <!-- Section 3: BIRD -->
        <div style="background-color: #23342d; border-left: 4px solid #40916c; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #52b788; margin-top: 0;">BIRD</h4>
            <ul style="margin-top: 0;">
                <li>250 QI dao + 7.5E490 insight</li>
                <li>450 QI dao + 5 NOTG essence</li>
                <li>750 QI dao + 10 UTG soulfire</li>
                <li>2.5 QI dao + 5 QDVG stars</li>
                <li>7.5 SX dao + 5 SPTG nebulae</li>
                <li>20 SX dao + 3.5 OCTG quasar</li>
                <li>50 SX dao + 2.5 NOVG miasma</li>
                <li>100 SX dao + 780 NOTG ash</li>
                <li>225 SX dao + 450 SPSG laws</li>
                <li>395 SX dao + 400 QISG faith</li>
                <li>675 SX dao + 3 SPVG divinity</li>
                <li>1.5 SP dao + 5E845 vitality</li>
                <li>4 SP dao + 700 UNG anima</li>
                <li>10 SP dao + 25 SPOG flora</li>
                <li>25 SP dao + 10 QA tian</li>
                <li>40 SP dao + 100 DE souls</li>
                <li>70 SP dao + 500 UDE beast remnants</li>
                <li>150 SP dao</li>
            </ul>
        </div>

        <!-- Section 4: DRAGON -->
        <div style="background-color: #2e2338; border-left: 4px solid #8b5cf6; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #a78bfa; margin-top: 0;">DRAGON</h4>
            <ul style="margin-top: 0;">
                <li>75 SX dao + 5E492 insight + 500 NOTG essence</li>
                <li>250 SX dao + 950 NOTG essence + 150 UTG soulfire</li>
                <li>500 SX + 350 UTG soulfire + 200 QDVG stars</li>
                <li>1.5 SP dao + 450 QDVG stars + 35 SPTG nebulae</li>
                <li>8.5 SP dao + 80 SPTG nebulae + 20 OCTG quasar</li>
                <li>25 SP dao + 50 OCTG quasar + 50 NOVG miasma</li>
                <li>100 SP dao + 95 NOVG miasma + 5 Qg ash</li>
                <li>250 SP dao + 15 Qg ash + 1 OCSG laws</li>
                <li>450 SP dao + 5 OCSG laws + 1 SXSG faith</li>
                <li>980 SP dao + 3.5 SXSG faith + 75 SPVG divinity</li>
                <li>5 OC dao + 125 SPVG divinity + 5E847 vitality</li>
                <li>25 OC dao + 1.5E848 vitality + 1 DNG anima</li>
                <li>100 OC dao + 5 DNG anima + 250 SPOG flora</li>
                <li>300 OC dao + 600 SPOG flora + 200 QA tian</li>
                <li>650 OC dao + 350 QA tian + 500 DE souls</li>
                <li>3 NO dao + 950 DE souls + 2.5 DDE beast remnants</li>
                <li>150 NO dao + 15 DDE beast remnants</li>
                <li>5 DE dao</li>
            </ul>
        </div>
    `
},

// === MARK MATERIALS & DROP RATES GUIDE ===
"law_synth_guide": {
    title: "Law Synthesis Guide",
    content: `
        <h3>Law Synthesis Guide</h3>

        <!-- Section 1: Materials Table -->
        <div style="background-color: #222a38; border-left: 4px solid #4ea8de; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #4ea8de; margin-top: 0;">Mark Drop Rates</h4>
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; color: #e2e8f0;">
                    <thead>
                        <tr style="border-bottom: 2px solid #4ea8de; background-color: #1a222d;">
                            <th style="padding: 8px;">Mark</th>
                            <th style="padding: 8px;">Material</th>
                            <th style="padding: 8px;">Chance/sec</th>
                            <th style="padding: 8px;">Avg Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #334155;">
                            <td style="padding: 8px;">Insight</td>
                            <td style="padding: 8px;">Lucent</td>
                            <td style="padding: 8px;">3.50%</td>
                            <td style="padding: 8px;">~29s</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155; background-color: #1a222d;">
                            <td style="padding: 8px;">Essence</td>
                            <td style="padding: 8px;">Ichor</td>
                            <td style="padding: 8px;">3.10%</td>
                            <td style="padding: 8px;">~32s</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155;">
                            <td style="padding: 8px;">Soulfire</td>
                            <td style="padding: 8px;">Cindral</td>
                            <td style="padding: 8px;">2.70%</td>
                            <td style="padding: 8px;">~37s</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155; background-color: #1a222d;">
                            <td style="padding: 8px;">Karma</td>
                            <td style="padding: 8px;">Kismet</td>
                            <td style="padding: 8px;">2.35%</td>
                            <td style="padding: 8px;">~43s</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155;">
                            <td style="padding: 8px;">Stars</td>
                            <td style="padding: 8px;">Aster</td>
                            <td style="padding: 8px;">2.05%</td>
                            <td style="padding: 8px;">~49s</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155; background-color: #1a222d;">
                            <td style="padding: 8px;">Nebulae</td>
                            <td style="padding: 8px;">Aeon</td>
                            <td style="padding: 8px;">1.80%</td>
                            <td style="padding: 8px;">~56s</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155;">
                            <td style="padding: 8px;">Quasar</td>
                            <td style="padding: 8px;">Solace</td>
                            <td style="padding: 8px;">1.55%</td>
                            <td style="padding: 8px;">~65s</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155; background-color: #1a222d;">
                            <td style="padding: 8px;">Miasma</td>
                            <td style="padding: 8px;">Morrow</td>
                            <td style="padding: 8px;">1.35%</td>
                            <td style="padding: 8px;">~74s</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155;">
                            <td style="padding: 8px;">Ash</td>
                            <td style="padding: 8px;">Sable</td>
                            <td style="padding: 8px;">1.15%</td>
                            <td style="padding: 8px;">~87s</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155; background-color: #1a222d;">
                            <td style="padding: 8px;">Laws</td>
                            <td style="padding: 8px;">Axiom</td>
                            <td style="padding: 8px;">1.00%</td>
                            <td style="padding: 8px;">~100s</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155;">
                            <td style="padding: 8px;">Faith</td>
                            <td style="padding: 8px;">Grace</td>
                            <td style="padding: 8px;">0.85%</td>
                            <td style="padding: 8px;">~118s</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Section 2: List of Materials -->
        <div style="background-color: #23342d; border-left: 4px solid #40916c; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #52b788; margin-top: 0;">List of Materials</h4>
            <ul style="margin-top: 0;">
                <li>Lucent > Insight Mark</li>
                <li>Ichor > Essence Mark</li>
                <li>Cindral > Soulfire Mark</li>
                <li>Kismet > Karma mark</li>
                <li>Aster > Stars Mark</li>
                <li>Aeon > Nebulae Mark</li>
                <li>Solace > Quasar Mark</li>
                <li>Morrow > Miasma Mark</li>
                <li>Sable > Ash Mark</li>
                <li>Axiom > Law Mark</li>
                <li>Grace > Faith Mark</li>
            </ul>
        </div>

        <!-- Section 3: Notes & Recommendations -->
        <div style="background-color: #382822; border-left: 4px solid #d97706; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #f59e0b; margin-top: 0;">Notes & Recommendations</h4>
            <p>Please note that materials have nothing to do with mps , it has its own drop chances just like potions/tickets</p>
            <p>It's recommend to lower your bulk so you can open the mark continuesly in case you don't have enough to roll in these marks</p>
        </div>
    `
},

// === SECRET MARKS GUIDE ===
"secret_marks_guide": {
    title: "Secret Marks Guide",
    content: `
        <h3>Secret Marks Guide</h3>

        <!-- Section 1: Secret Marks List -->
        <div style="background-color: #1f2937; border-left: 4px solid #8b5cf6; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #a78bfa; margin-top: 0;">SECRET MARKS</h4>
            
            <ul style="margin-top: 0;">
                <li style="margin-bottom: 10px;">
                    <b>Karma: Revenge</b><br>
                    MPS: 2ud<br>
                    Luck: 12K<br>
                    Base Chance: 1 / 7.5td<br>
                    <i>Get it once u have Omnicience</i>
                </li>
                <li style="margin-bottom: 10px;">
                    <b>Quasar: Apotheosis</b><br>
                    MPS: 5td<br>
                    Luck: 120K<br>
                    Base Chance: 1 / 400Qid
                </li>
                <li style="margin-bottom: 10px;">
                    <b>Soulfire: Deity</b><br>
                    MPS: 1–10dvg<br>
                    Luck: 12M – 14M<br>
                    Base Chance: 1 / 1.28qivg
                </li>
                <li style="margin-bottom: 10px;">
                    <b>Law: Judge</b><br>
                    MPS: 10Tvg (100Tvg recommended)<br>
                    Luck: 31M<br>
                    Base Chance: 1 / 1.42Spvg<br>
                    <i>Extremely slow to obtain even one</i>
                </li>
                <li style="margin-bottom: 10px;">
                    <b>Ash: Voidcinder</b><br>
                    <i>(Try getting atleast x2 vitality or more on the mark first)</i><br>
                    MPS: 5ocvg (Low ocvg MPS recommended)<br>
                    Luck: 1B<br>
                    Base Chance: 1 / 514.08Tg
                </li>
                <li style="margin-bottom: 10px;">
                    <b>Insight: Key</b> <i>(Only obtainable after karma milestone: 10 Sg)</i><br>
                    MPS: 1Tg<br>
                    Luck: 9B<br>
                    Base Chance: 1 / 122.73Qatg<br>
                </li>
            </ul>
        </div>

        <!-- Section 2: Non-Secret Marks & Others -->
        <div style="background-color: #1f2937; border-left: 4px solid #3b82f6; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #60a5fa; margin-top: 0;">OTHER MARKS</h4>

            <ul style="margin-top: 0;">
                <li style="margin-bottom: 10px;">
                    <b>Ash: Covenant</b><br>
                    <i>(Try getting a million covenant at first so that u gain abt x2 faith from it)</i><br>
                    MPS: 5qavg<br>
                    Luck: 200M<br>
                    Base Chance: 1 / 217.73qavg
                </li>
                <li style="margin-bottom: 10px;">
                    <b>Essence: Sanguine</b><br>
                    MPS: 800qavg<br>
                    Luck: 300M<br>
                    Base Chance: 1 / 6.22ocvg
                </li>
            </ul>
        </div>
    `
},

// === ALL MARKS & DAO PATH GUIDE ===
"all_marks_stats_guide": {
    title: "All Marks Stats",
    content: `
        <h3>All Marks Stats/h3>

        <!-- Section 1: GLOBAL MARKS -->
        <div style="background-color: #1f2937; border-left: 4px solid #3b82f6; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #60a5fa; margin-top: 0;">GLOBAL MARKS</h4>

            <h5 style="color: #4ea8de; margin-bottom: 6px;">Mark of unity</h5>
            <ul style="margin-top: 0;">
                <li>Stranger (1/1.12) - x100 Qi | x100 Luck (50K Max)</li>
                <li>Acquaintance (1/10) - x50 insight | x30 Essence | x20 Qi  (35K Max)</li>
                <li>Friend (1/112.36) - x150 Soulfire | x100 Essence | x5 Mark Bulk | x3 Mark Luck (10K Max)</li>
                <li>Champion (1/1K) - x200 Qi | x200 Karma | x2 Beast core chance | Mark Luck x5 (1K Max)</li>
                <li>Legend (1/10k) - x500 luck | x500 Qi | x10 Remnents | x3 Mark Speed | x3 Mark Bulk | +3 Mark Clone (10 Max)</li>
            </ul>

            <h5 style="color: #4ea8de; margin-bottom: 6px;">Mark of confluence</h5>
            <ul style="margin-top: 0;">
                <li>Starfarer (1/1.12) - x8 Stars | x4 Nebula | x1.5 Mark Speed (50K Max)</li>
                <li>Voidcaller (1/10) - x6 Quasar | x4 Miasma | x1.5 Mark Bulk (35K Max)</li>
                <li>Apostle (1/112) - x4 Remnants | x5 Ash | x2 Damage (10K Max)</li>
                <li>Lawbinder (1/1K) - x5 Faith | x4 Laws | x2 Mark Luck (1K Max)</li>
                <li>Worldheart (1/10K) - x5 Disciple Breakthrough Luck | x5 Citizens | x5 Faith | x8 Laws | x2 Mark Bulk | x2 Mark Speed | +3 Mark Clone (10 Max)</li>
            </ul>
        </div>

        <!-- Section 2: W1 MARKS -->
        <div style="background-color: #1f2937; border-left: 4px solid #10b981; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #34d399; margin-top: 0;">W1 MARKS</h4>

            <h5 style="color: #52b788; margin-bottom: 6px;">Mark of insight</h5>
            <ul style="margin-top: 0;">
                <li>Dim (1/1) - x10 luck (20K Max)</li>
                <li>Aware (1/10) - x16 Qi | x1.5 luck | x2 insight (8K Max)</li>
                <li>Keen (1/50) - x5 luck | x3 insight (4k Max)</li>
                <li>Clear (1/600) - x40 Qi | x7 luck | x3 insight | x1.5 Essence (2k Max)</li>
                <li>Piercing (1/10K) - x75 Qi | x8 luck | x2.5 Essence (740 Max)</li>
                <li>Deepseeing (1/250K)-  x150 Qi | x4 insight | x2.5 Soulfire (150 Max)</li>
                <li>Farsight (1/100M) - x250 QI | x14 luck | x4 Essence (83 Max)</li>
                <li>Truesight (1/1Qa) - x20 luck | x6 insight | x5 Soulfire | x2 Stars | x2.5 Mark Bulk | x2.25 Mark Speed (20 Max)</li>
                <li>Omniscience (1/750DDe) - x500 Qi | x30 luck | x10 insight | x10 Essence | x8 Soulfire | x5 Remnents | x3 Mark Bulk | x3 Mark Speed | x2 Mark Luck (10 Max)</li>
            </ul>

            <h5 style="color: #52b788; margin-bottom: 6px;">Mark of essence</h5>
            <ul style="margin-top: 0;">
                <li>Fragment (1/1) - x10 Qi | x55 luck (180K Max)</li>
                <li>Shard (1/12) - x115 Essence | x55 Qi | x30 luck (75K Max)</li>
                <li>Node (1/60) - x25 luck | x115 Insight (142.5K Max)</li>
                <li>Crest (1/750) - x22 Essence | x12 Qi | x58 luck (19K Max)</li>
                <li>Ruby (1/15K) - x42 Essence | x40 luck (1.3K Max)</li>
                <li>Nucleus (1/400k) - x60 Essence | x35 luck | x2.5 Soulfire | x1.75 Mark Speed (170 Max)</li>
                <li>Prism (1/150M) - x160 Essence | x80 Qi | x10 Insight | x2.5 Remnents (79 Max)</li>
                <li>Eternal (1/2Qa) - x300 Essence | x150 Qi | x25 luck | x6 Soulfire | x2 Star | x2 Mark Bulk | x2 Mark Speed (20 Max)</li>
                <li>Sanguine (1/6.22Ocvg) - x1Spvg Qi | x20 Disciple Breakthrough Luck | x150 Citizens | x25 Divinity | x550K Karma (25K Max)</li>
            </ul>

            <h5 style="color: #52b788; margin-bottom: 6px;">Mark of Soulfire</h5>
            <ul style="margin-top: 0;">
                <li>Mote (1/1) - x10 Qi | x8 Essence | x2 Soulfire (280K Max)</li>
                <li>Kindling (1/40) - x11 Luck | x18 Insight | x4 Soulfire (35K Max)</li>
                <li>Wraith (1/400) - x8 Qi | x2 Karma (14K Max)</li>
                <li>Pyre (1/15K) - x18 Luck | x10 Soulfire | x4 Remnants | x1.5 Mark Speed (5K Max)</li>
                <li>Brand (1/80K) - x20 Luck | x35 Qi | x4 Karma (680 Max)</li>
                <li>Inferno (1/6M) - x25 Essence | x20 Soulfire | x9 Remnants | x1.75 Mark Bulk (190 Max)</li>
                <li>Everflame (1/500B) - x30 Luck | x81 Qi | x40 Essence | x30 Soulfire | x2 Mark Bulk | x1.25 Core Chance (60 Max)</li>
                <li>Soulnova (1/2No) - x181 Qi | x61 Soulfire | x2 Remnants | x3 Mark Bulk | x2.5 Mark Speed | x2 Mark Luck (20 Max)</li>
            </ul>

            <h5 style="color: #52b788; margin-bottom: 6px;">Mark of karma</h5>
            <ul style="margin-top: 0;">
                <li>Trace (1/1) - x5 Qi | x5 Karma (300K Max)</li>
                <li>Ledger (1/40) - x5 Qi | x4 Karma | x4 Soulfire (60K Max)</li>
                <li>Burden (1/400) - x7 Luck | x4 Qi | x4 Karma (40K Max)</li>
                <li>Mercy (1/12K) - x10 Luck | x20 Qi | x6 Karma | x2 Remnants (12K Max)</li>
                <li>Balance (1/250K) - x15 Luck | x20 Qi | x5 Soulfire | x2 Karma (1.2K Max)</li>
                <li>Reckoning (1/60M) - x13 Luck | x38 Qi | x16 Essence | x2 Karma (200 Max)</li>
                <li>Samsara (1/50B) - x125 Luck | x12.5K Qi | x3 Karma | x3 Mark Bulk | x2 Mark Speed (40 Max)</li>
                <li>Nirvana (1/2T) - x375 Luck | x12.5K Qi | x13 Karma | x3 Stars | x2 Mark Bulk (20 Max)</li>
            </ul>
        </div>

        <!-- Section 3: W2 MARKS -->
        <div style="background-color: #1f2937; border-left: 4px solid #f59e0b; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #fbbf24; margin-top: 0;">W2 MARKS</h4>

            <h5 style="color: #f59e0b; margin-bottom: 6px;">Mark of stars</h5>
            <ul style="margin-top: 0;">
                <li>Spark (1/1) - x400 Luck | x5 Stars (5Qa Max)</li>
                <li>Stardust (1/25K) - x400 Qi | x12 Stars (1Qa Max)</li>
                <li>Astral (1/400M) - x1K Luck | x1K Qi | x16 Stars | x2 Mark Bulk (20T Max)</li>
                <li>Comet (1/50B) - x2K Luck | x1.6K Qi | x20 Stars | x7 Mark Bulk (100B Max)</li>
                <li>Radiant (1/40T) - x2K Luck | x2.4K Qi | x2 Nebula (5B Max)</li>
                <li>Celestial (1/3.5Qa) - x800 Luck | x800 Qi | x1.5 Nebula (50M Max)</li>
                <li>Supernova (1/500Qa) - x1K Luck | x600 Qi | x5 Essence | x15 Nebula | x6 Mark Speed (300K Max)</li>
                <li>Genesis (1/25Qi) - x2K Luck | x2K Qi | x6 Nebula | x2 Mark Bulk (10K Max)</li>
            </ul>

            <h5 style="color: #f59e0b; margin-bottom: 6px;">Mark of nebulae</h5>
            <ul style="margin-top: 0;">
                <li>Mistglow (1/1) - x4.6 Nebula | x2K Luck | x3K Karma (15Qi Max)</li>
                <li>Gasveil (1/750) - x5.4 Nebula | x4K Luck | x3K Qi | x5 Mark Speed (1Qi Max)</li>
                <li>Starseed (1/350K) - x4.8K Luck | x12 Stars | x6 Nebula | x2.5K Qi | x2 Mark Bulk (100Qa Max)</li>
                <li>Moonwake (1/15B) - x1.6K Luck | x1.6K Qi | x20 Nebula | x40 Stars | x1.5K Karma | x6 Mark Speed (5Qa Max)</li>
                <li>Cometheart (1/25T) - x2K Luck | x2.4K Qi | x40 Nebula | x8 Mark Bulk (500T Max)</li>
                <li>Voidpetal (1/1Qa) - x1K Luck | x1K Qi | x20 Nebula | x20 Stars (80T Max)</li>
                <li>Novashard (1/150Sx) - x500 Luck | x300 Qi | x10 Essence | x100 Karma | x5 Nebula | x4 Mark Speed (750B Max)</li>
                <li>Astral Crown (1/10Sp) - x1K Luck | x2K Qi | x300 Karma | x20 Nebula | x3 Mark Bulk (1B Max)</li>
            </ul>

            <h5 style="color: #f59e0b; margin-bottom: 6px;">Mark of quasar</h5>
            <ul style="margin-top: 0;">
                <li>Flare (1/1) - x300 Quasar | x8K Qi (240Qi Max)</li>
                <li>Vanta (1/6K) - x16 Nebula | x8K Luck | x4K Karma | x132 Quasar (16Qi Max)</li>
                <li>Sear (1/2.8M) - x12K Qi | x48 Stars | x112 Quasar | x3K Karma | x3 Mark Bulk (1.6Qi Max)</li>
                <li>Halo (1/120B) - x6K Karma | x132 Quasar | x1.5 Mark Luck | x3K Qi (80Qa Max)</li>
                <li>Lumen (1/200T) - x12 Mark Bulk | x6K Qi | x3K Luck | x148 Quasar (8Qa Max)</li>
                <li>Surge (1/8Qa) - x3.2K Qi | x260 Quasar | x3 Remnants (1.3Qa Max)</li>
                <li>Corona (1/1.2Sp) - x2K Karma | x120 Quasar | x3K Qi | x3K Luck (12T Max)</li>
                <li>Zenith (1/2No) - x4 Mark Luck | x240 Quasar | x3 Mark Bulk | x8K Qi (16B Max)</li>
            </ul>
        </div>

        <!-- Section 4: W3 MARKS -->
        <div style="background-color: #1f2937; border-left: 4px solid #8b5cf6; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #a78bfa; margin-top: 0;">W3 MARKS</h4>

            <h5 style="color: #a78bfa; margin-bottom: 6px;">Mark of miasma</h5>
            <ul style="margin-top: 0;">
                <li>Spore (1/1) - x32 Miasma | x18 Mark Speed | x56 Quasar (25K Max)</li>
                <li>Seed (1/2B) - x48 Miasma | x8K Breakthrough Luck | x8 Mark Bulk (5M Max)</li>
                <li>Rotbrand (1/900B) - x86 Miasma | x128K Qi | x512 Stars | x2 Manual Luck (100B Max)</li>
                <li>Vein (1/12Qa) - x144 Miasma | x256K Breakthrough Luck | x2 Damage (50Qa Max)</li>
                <li>Bloom (1/15Qn) - x56 Miasma | x336K Qi | x12 Beast Remnants | x128 Stars | x5 ash | x2 Mark Luck (5Qn Max)</li>
                <li>Wormmoon (1/1Sp) - x72 Miasma | x4.8M Qi | x4.8M Breakthrough Luck (2Sx Max)</li>
                <li>Tombmire (1/800No) - x20 Miasma | x1.6M Breakthrough Luck | x1.2M Qi | x7.5 ash | x3 Mark Speed | x2 Mark Bulk (200Sp Max)</li>
                <li>Abyssplague (1/5Ud) - x32 Miasma | x12M Qi | x12M Breakthrough Luck | x2 Manual Luck (50No Max)</li>
            </ul>

            <h5 style="color: #a78bfa; margin-bottom: 6px;">Mark of ash</h5>
            <ul style="margin-top: 0;">
                <li>Cinder (1/1) - x12 Ash (100K Max)</li>
                <li>Smolder (1/2B) - x16 Miasma | x16 Ash | x1K Quasar (20M Max)</li>
                <li>Soot (1/900B) - x48 Ash | x2 Damage (400B Max)</li>
                <li>Ember (1/12Qa) - x24 Beast Remnants | x3 Mark Bulk | x3 Mark Speed (200Qa Max)</li>
                <li>Pyre (1/15Qn) - x128 Ash | x9.6M Breakthrough Luck | x9.6M Qi (20Qi Max)</li>
                <li>Ashveil (1/1Sp) - x256 Miasma | x96 Ash | x256 Quasar (8Sx Max)</li>
                <li>Charfall (1/800No) - x7 Damage | x2 Beast Core Chance | x12 Beast Remnants (800Sp Max)</li>
                <li>Hollowflame (1/5Ud) - x256 Ash | x96 Miasma | x128M Breakthrough Luck | x128M Qi (200No Max)</li>
                <li>Covenant (1/217.73Qavg) - x50Qivg Qi | x4 Disciple Breakthrough Luck | x5 Citizens | x12 Faith | x8 Laws | x2 Mark Luck</li>
            </ul>

            <h5 style="color: #a78bfa; margin-bottom: 6px;">Mark of law</h5>
            <ul style="margin-top: 0;">
                <li>Edict (1/1) - x7.5 Laws | x2 Mark Bulk (100Ocd Max)</li>
                <li>Clause (1/100B) - x12 Laws | x5 Mark Bulk (100Sxd Max)</li>
                <li>Verdict (1/100T) - x512M Qi | x1B Essence | x1B Insight | x12 Laws (60Qid Max)</li>
                <li>Tribunal (1/5Qi) - x7.5 Laws | x2 Manual Luck | x2.5 Mark Luck | x3 Mark Speed (3Qad Max)</li>
                <li>Mandate (1/20Sx) - x1B Soulfire | x1B Karma | x16 Laws (3Td Max)</li>
                <li>Decree (1/5Oc) - x1B Stars | x1B Nebula | x8 Laws | x4 Mark Bulk | x32 Mark Speed (30Ud Max)</li>
                <li>Statute (1/1Ud) - x5B Qi | x4M Luck | x24 Laws | x10 faith (3No Max)</li>
                <li>Absolute (1/100Td) - x1B Quasar | x36 Laws | x8 Mark Bulk | x2 Mark Luck | x8 Mark Speed (3Oc Max)</li>
            </ul>
        </div>

        <!-- Section 5: W4 MARKS -->
        <div style="background-color: #1f2937; border-left: 4px solid #ec4899; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #f472b6; margin-top: 0;">W4 MARKS</h4>

            <h5 style="color: #f472b6; margin-bottom: 6px;">Mark of faith</h5>
            <ul style="margin-top: 0;">
                <li>Prayer (1/1) - x4 Citizens | x6 Faith (15Ocd Max)</li>
                <li>Vow (1/24T) - x50Uvg Qi | x12 Faith (10Spd Max)</li>
                <li>Hymn (1/240Qa) - x2 Disciple Breakthrough Luck | x18 Citizens | x24 Faith (100Sxd Max)</li>
                <li>Shrine (1/2.4Sx) - x20Dvg Qi | x40 Citizens | x55 Faith (1Sxd Max)</li>
                <li>Zeal (1/24Sp) - x6 Disciple Breakthrough Luck | x90 Faith | x3 Mark Speed (10Qid Max)</li>
                <li>Miracle (2.4No) - x160 Citizens | x220 Faith | x12 Laws (100Qad Max)</li>
                <li>Saint (1/240Ud) - x80Qavg Qi | x24 Disciple Breakthrough luck | x5 divinity | x500 Faith (10Td Max)</li>
                <li>Providence (1/240Qad) - x50Qivg Qi | x80 Disciple Breakthrough Luck | 1.2K Citizens | x2.5K Faith | x10 divinity  (100Ud Max)</li>
            </ul>

            <h5 style="color: #f472b6; margin-bottom: 6px;">Mark of divinity</h5>
            <ul style="margin-top: 0;">
                <li>Sanctum (1/1) - x9 citizens| x13.5 divinity</li>
                <li>Seraph (1/1No) - x112.5Uvg qi | x27 divinity</li>
                <li>Numen (1/10Dd) - x4.5 disciple luck | x40.5 citizens | x54 divinity</li>
                <li>Aureole (1/10Sxd) - x45Dvg qi | x90 citizens | x123.75 divinity</li>
                <li>Elysium (1/10Vg) - x13.5 disiple luck | x202.5 divinity | x6.75 mark speed</li>
                <li>Emperyan (1/10Qivg) - x360 citizens | x495 divinity | x27 laws</li>
                <li>Theurgy (1/10Ocvg) - x180 Qavg qi | x54 disciple luck| x1.12K divinity</li>
                <li>Benediction (1/100Tg) - x112.5Qivg qi | x180 disiple luck | x2.7K citizens | x5.62K divinity</li>
            </ul>
        </div>

        <!-- Section 6: W5 MARKS -->
        <div style="background-color: #1f2937; border-left: 4px solid #06b6d4; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #22d3ee; margin-top: 0;">W5 MARKS</h4>

            <h5 style="color: #22d3ee; margin-bottom: 6px;">Mark of vitality</h5>
            <ul style="margin-top: 0;">
                <li>Lifespark (1/1) - x4.5Qi qi | x13.5 vitality</li>
                <li>Heartroot (1/15.42Sp) - x27 vitality | x4.5 anima</li>
                <li>Marrowleaf (1/154.22Dc) - x2.25UD qi | x6.75 disciple luck</li>
                <li>Pulsebloom (1/1.23Qad) - x72 vitality | x4.5 mark speed</li>
                <li>Animabark (1/12.34Spd) - x108 vitality | x11.25 anima</li>
                <li>Spiritvein (1/82.25Vg) - x2.25Tvg qi | x27 disciple luck | x4.5 mark bulk</li>
                <li>Verdantheart (1/411Tvg) - x216 vitality | x13.5 Anima | x4.5 mark luck</li>
                <li>Worldseed (1/2.47Spvg) - x225Tg qi | x72 disciple luck | x576 vitality | x18 anima</li>
            </ul>

            <h5 style="color: #22d3ee; margin-bottom: 6px;">Mark of anima</h5>
            <ul style="margin-top: 0;">
                <li>Breathwisp (1/1) - x2.25No qi | x18 vitality</li>
                <li>Soulthread (1/10Sp) - x36 vitality | x4.5 anima</li>
                <li>Karmic trace (1/100Dc) - x2.25Nod qi | x6.75 anima | x6.75M karma</li>
                <li>Auralumen (1/1Qad) - x6.75 citizens | x72 vitality | x9 anima</li>
                <li>Animaflow (1/10Spd) - x2.25Novg qi | x13.5 anima | x18M karma</li>
                <li>Spiritcore (1/100Vg) - x144 vitality | x18 anima</li>
                <li>Florasoul (1/1Qavg) - x13.5 citizens | x6.75 divinity | x27 anima | x4.5 flora | x54M karma</li>
                <li>Worldbreath (1/10Spvg) - x2.25 Notg qi | x288 vitality | x36 anima | x9 flora | x144M karma</li>
            </ul>

            <h5 style="color: #22d3ee; margin-bottom: 6px;">Mark of flora</h5>
            <ul style="margin-top: 0;">
                <li>Seedling (1/1) - x18 vitality | x9 flora</li>
                <li>Rootwisp (1/100Dc0 - x45 vitality | x27 anima</li>
                <li>Petalflare (1/1Qad) - x2.25Novg qi | x22.5 flora</li>
                <li>Thornpulse (1/10Spd) - x11.25 disiple luck | x90 vitality</li>
                <li>Bloomheart (1/100Vg) - x40.5 anima | x40.5 flora</li>
                <li>Lifebough (1/1Qavg) - x2.25Notg qi | x22.5 disciple luck | x180 vitality</li>
                <li>Verdantsoul (1/10Spvg) - x2.25Qaqag qi | x72 anima | x90 flora</li>
                <li>Worldflora (1/100Tg) - 2.25Noqag qi | x54 disciple luck | x432 vitality | x144 anima | x216 flora</li>
            </ul>
        </div>

        <!-- Section 7: SECRET MARKS -->
        <div style="background-color: #1f2937; border-left: 4px solid #eab308; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #fde047; margin-top: 0;">SECRET MARKS</h4>
            <ul style="margin-top: 0;">
                <li>Revenge (Karma) - 2x remnants | x1.5 damage | +2 mark clone</li>
                <li>Apotheosis (Quasar) - x1.8M qi | x1.8M luck | x20 miasma | x30 ash | x2 manual luck | x6 mark bulk</li>
                <li>Deity (Soulfire) - x5Oc qi | x5 citizens | x3 faith | x45K karma | x30 laws | x3 damage (5k max)</li>
                <li>Judge (Laws) - x50Uvg qi |x5 disciple breakthrough luck | x2 mark bulk</li>
                <li>Voidcinder (Ash) - x512Notg | x256 vitality | x8 anima | x2 beast cores | x2 materials.</li>
                <li>Key (Insight) - x512Notg qi | x512 disciple breakthrough luck | x1T anima | x15 flora | unlocks flora upgrade tree ( 1 max)</li>
            </ul>
        </div>

        <!-- Section 8: MARK OF TIAN & MARK OF SOULS -->
        <div style="background-color: #1f2937; border-left: 4px solid #6366f1; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #818cf8; margin-top: 0;">MARK OF TIAN & MARK OF SOULS</h4>

            <h5 style="color: #818cf8; margin-bottom: 6px;">MARK OF TIAN</h5>
            <ul style="margin-top: 0;">
                <li>Spiri(1/1) - x2.25No qi | x9 divinity | x9 tian</li>
                <li>Astral(1/200Dc) - x18 citizens | x18 divinity | x18 tian</li>
                <li>Divine(1/2Qad) - x2.25Nod qi | x11.25 disciple luck | x27 tian</li>
                <li>Sacred(1/20Spd) - x45 divinity | x22.5 laws | x36 tian</li>
                <li>Immortal(1/200Vg) - x45 vitality | x22.5 anima | x54 tian</li>
                <li>Heavenly(1/2Qavg) - x2.25Novg qi | x22.5 disciple luck | x22.5 flora | x72 tian</li>
                <li>Primordial(1/20Spvg) - x2.25Notg qi | x112.5 citizens | x112.5 divinity | x108 tian</li>
                <li>Dao(1/200Tg) - x2.25Noqag qi | x225 divinity | x225 vitality | x112.5 anima | x112.5 flora | x216 tian</li>
            </ul>

            <h5 style="color: #818cf8; margin-bottom: 6px;">MARK OF SOULS</h5>
            <ul style="margin-top: 0;">
                <li>Wisp(1/1) - x11.25 souls</li>
                <li>Shade(1/1K) - x18 souls</li>
                <li>Wraith(1/1M) - x27 souls</li>
                <li>Revenant(1/1B) - x45 souls</li>
                <li>Seraph(1/1T) - x78.75 souls</li>
                <li>Empyrean(1/1Qa) - x135 souls</li>
            </ul>
        </div>

        <!-- Section 9: DAO PATH -->
        <div style="background-color: #1f2937; border-left: 4px solid #14b8a6; padding: 12px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="color: #2dd4bf; margin-top: 0;">DAO PATH</h4>
            <ul style="margin-top: 0;">
                <li>Creative (1/1) - x2 insight | x2 essence | x2 soulfire | x5 dao | x1.5 meridian luck | x2 karma</li>
                <li>Joyous (1/250) - 7.5 dao | x1.5 dao generation | x1.5 meridian luck | x3 stars | x3 nebulae | x3 quasar</li>
                <li>Radiance (1/500) - x10 dao | x1.5 meridian luck | x4 miasma | x4 ash | x4 laws | x1.5 dao path luck</li>
                <li>Snake (1/2.5K) - x5 faith | x5 divinity | x15 dao | x1.5 dao path bulk</li>
                <li>Gentle (1/7.5K) - x7 vitality | x7 anima | x7 flora | x20 dao | x1.5 dao path speed</li>
                <li>Abyssal (1/20K) - x9 tian | x9 souls | x30 dao | x2 material drops</li>
                <li>Bound (1/50K) - x50 dao | x2 dao path bulk | x2 dao path luck</li>
                <li>Receptive (1/200K) - x100 dao | x2 dao path bulk | x2 dao path luck | x2 dao path speed</li>
            </ul>
        </div>
    `
},

// === ASH TREE DATA ===
"ash_tree": {
    title: "Ash Upgrade Tree",
    content: `
        <h3>Ash Upgrade Tree</h3>

        <!-- Image Container -->
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="images/ash_tree.png" alt="Ash Upgrade Tree Diagram" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #374151;" />
        </div>

        <!-- Section 1: Part 1 -->
        <div style="background-color: #1f2937; border-left: 4px solid #ef4444; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #f87171; margin-top: 0;">Tier 1 Upgrades</h4>

            <h5 style="color: #fca5a5; margin-bottom: 6px;">More Ash (15 Upgrades)</h5>
            <ul style="margin-top: 0;">
                <li>10 Sx</li>
                <li>28 Sx</li>
                <li>78 Sx</li>
                <li>219.52 Sx</li>
                <li>614.66 Sx</li>
                <li>1.72 Sp</li>
                <li>4.82 Sp</li>
                <li>13.49 Sp</li>
                <li>37.78 Sp</li>
                <li>105.78 Sp</li>
                <li>296.20 Sp</li>
                <li>829.35 Sp</li>
                <li>2.32 Oc</li>
                <li>6.50 Oc</li>
                <li>18.21 Oc</li>
            </ul>

            <h5 style="color: #fca5a5; margin-bottom: 6px;">More Miasma (10 Upgrades)</h5>
            <ul style="margin-top: 0;">
                <li>50 Sx</li>
                <li>165 Sx</li>
                <li>544.4 Sx</li>
                <li>1.8 Sp</li>
                <li>5.93 Sp</li>
                <li>19.57 Sp</li>
                <li>64.57 Sp</li>
                <li>213.09 Sp</li>
                <li>703.2 Sp</li>
                <li>2.32 Oc</li>
            </ul>

            <h5 style="color: #fca5a5; margin-bottom: 6px;">More Manual Luck (5 Upgrades)</h5>
            <ul style="margin-top: 0;">
                <li>1 Sp</li>
                <li>10 Sp</li>
                <li>100 Sp</li>
                <li>1 Oc</li>
                <li>10 Oc</li>
            </ul>

            <h5 style="color: #fca5a5; margin-bottom: 6px;">More Damage (1 Upgrade)</h5>
            <ul style="margin-top: 0;">
                <li>5 Sp</li>
            </ul>

            <h5 style="color: #fca5a5; margin-bottom: 6px;">More Mark Bulk (8 Upgrades)</h5>
            <ul style="margin-top: 0;">
                <li>80 Sp</li>
                <li>336 Sp</li>
                <li>1.41 Oc</li>
                <li>5.93 Oc</li>
                <li>24.89 Oc</li>
                <li>104.55 Oc</li>
                <li>439.12 Oc</li>
                <li>1.84 No</li>
            </ul>

            <h5 style="color: #fca5a5; margin-bottom: 6px;">More Beast Core Chance (5 Upgrades)</h5>
            <ul style="margin-top: 0;">
                <li>50 Sp</li>
                <li>250 Sp</li>
                <li>1.25 Oc</li>
                <li>6.25 Oc</li>
                <li>31.25 Oc</li>
            </ul>
        </div>

        <!-- Section 2: Part 2 -->
        <div style="background-color: #1f2937; border-left: 4px solid #f59e0b; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #fbbf24; margin-top: 0;">Unlocks & Tier 2 Upgrades</h4>

            <h5 style="color: #fcd34d; margin-bottom: 6px;">Unlock Challenges</h5>
            <ul style="margin-top: 0;">
                <li>Unlock: 1 No</li>
            </ul>

            <h5 style="color: #fcd34d; margin-bottom: 6px;">More Ash II (10 Upgrades)</h5>
            <ul style="margin-top: 0;">
                <li>5 No</li>
                <li>22.5 No</li>
                <li>101.25 No</li>
                <li>455.63 No</li>
                <li>2.05 Dc</li>
                <li>9.23 Dc</li>
                <li>41.52 Dc</li>
                <li>186.83 Dc</li>
                <li>840.76 Dc</li>
                <li>3.78 Ud</li>
            </ul>

            <h5 style="color: #fcd34d; margin-bottom: 6px;">More Manual Luck II (5 Upgrades)</h5>
            <ul style="margin-top: 0;">
                <li>10 No</li>
                <li>100 No</li>
                <li>1 Dc</li>
                <li>10 Dc</li>
                <li>100 Dc</li>
            </ul>

            <h5 style="color: #fcd34d; margin-bottom: 6px;">More Karma (2 Upgrades)</h5>
            <ul style="margin-top: 0;">
                <li>20 Dc</li>
                <li>500 Dc</li>
            </ul>

            <h5 style="color: #fcd34d; margin-bottom: 6px;">Unlock Laws</h5>
            <ul style="margin-top: 0;">
                <li>Unlock: 15 Ud</li>
            </ul>
        </div>
    `
},

// === FLORA TREE DATA ===
"flora_tree": {
    title: "Flora Upgrade Tree",
    content: `
        <h3>Flora Upgrade Tree</h3>

        <!-- Image Container -->
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="images/flora_tree.png" alt="Flora Upgrade Tree Diagram" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #374151;" />
        </div>

        <!-- Section 1: Part 1 -->
        <div style="background-color: #1f2937; border-left: 4px solid #10b981; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #34d399; margin-top: 0;">Tier 1 Upgrades & Base Unlocks</h4>

            <h5 style="color: #6ee7b7; margin-bottom: 6px;">Flora Overload (10 Upgrades)</h5>
            <ul style="margin-top: 0;">
                <li>1 Qi</li>
                <li>2.7 Qi</li>
                <li>7.29 Qi</li>
                <li>19.68 Qi</li>
                <li>53.14 Qi</li>
                <li>143.49 Qi</li>
                <li>387.42 Qi</li>
                <li>1.05 Sx</li>
                <li>2.82 Sx</li>
                <li>7.63 Sx</li>
            </ul>

            <h5 style="color: #6ee7b7; margin-bottom: 6px;">New Bloodline (1 Upgrade)</h5>
            <ul style="margin-top: 0;">
                <li>Unlock: 2 Sp</li>
            </ul>

            <h5 style="color: #6ee7b7; margin-bottom: 6px;">Bloodline Roll Bulk (4 Upgrades)</h5>
            <ul style="margin-top: 0;">
                <li>4 Sp</li>
                <li>8 Sp</li>
                <li>16 Sp</li>
                <li>32 Sp</li>
            </ul>

            <h5 style="color: #6ee7b7; margin-bottom: 6px;">Forbidden Secrets (1 Upgrade)</h5>
            <ul style="margin-top: 0;">
                <li>Unlock: 35 Sp</li>
            </ul>

            <h5 style="color: #6ee7b7; margin-bottom: 6px;">More Manual Luck (5 Upgrades)</h5>
            <ul style="margin-top: 0;">
                <li>30 Sp</li>
                <li>90 Sp</li>
                <li>270 Sp</li>
                <li>810 Sp</li>
                <li>2.43 Oc</li>
            </ul>

            <h5 style="color: #6ee7b7; margin-bottom: 6px;">More Flora Upgrades (1 Upgrade)</h5>
            <ul style="margin-top: 0;">
                <li>100 Sp</li>
            </ul>
        </div>

        <!-- Section 2: Part 2 -->
        <div style="background-color: #1f2937; border-left: 4px solid #06b6d4; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #22d3ee; margin-top: 0;">Mid to Late-Game Unlocks & Upgrades</h4>

            <h5 style="color: #67e8f9; margin-bottom: 6px;">Beast Milestone (1 Upgrade)</h5>
            <ul style="margin-top: 0;">
                <li>Unlock: 10 No</li>
            </ul>

            <h5 style="color: #67e8f9; margin-bottom: 6px;">More Manual Luck II (1 Upgrade)</h5>
            <ul style="margin-top: 0;">
                <li>1 Dc</li>
            </ul>

            <h5 style="color: #67e8f9; margin-bottom: 6px;">Bloodline Roll Bulk II (1 Upgrade)</h5>
            <ul style="margin-top: 0;">
                <li>5 Dc</li>
            </ul>

            <h5 style="color: #67e8f9; margin-bottom: 6px;">Flora Bloom (3 Upgrades)</h5>
            <ul style="margin-top: 0;">
                <li>50 Dc</li>
                <li>50 Spd</li>
                <li>50 Qavg</li>
            </ul>

            <h5 style="color: #67e8f9; margin-bottom: 6px;">Flora Mark (1 Upgrade)</h5>
            <ul style="margin-top: 0;">
                <li>Unlock: 2 Notg</li>
            </ul>

            <h5 style="color: #67e8f9; margin-bottom: 6px;">More Mark Speed (1 Upgrade)</h5>
            <ul style="margin-top: 0;">
                <li>1 Qag</li>
            </ul>

            <h5 style="color: #67e8f9; margin-bottom: 6px;">More Upgrades (1 Upgrade)</h5>
            <ul style="margin-top: 0;">
                <li>2 Qag</li>
            </ul>
        </div>
    `
},

// === SPIRITUAL ROOTS & BLOODLINES DATA ===
"bloodlines_stats_guide": {
    title: "Spiritual Roots & Bloodlines Guide",
    content: `
        <h3>Spiritual Roots & Bloodlines Guide</h3>

        <!-- Section 1: W1 BLOODLINES -->
        <div style="background-color: #1f2937; border-left: 4px solid #3b82f6; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #60a5fa; margin-top: 0;">BASE BLOODLINES</h4>
            <ul style="margin-top: 0;">
                <li><strong>WOLF (45.0%)</strong>: Max: x6.6 Luck</li>
                <li><strong>SERPENT (24.0%)</strong>: Max: x6.6 Qi, x6.6 Essence</li>
                <li><strong>CRANE (14.0%)</strong>: Max: x4.8 Mark Speed</li>
                <li><strong>TURTLE (8.0%)</strong>: Max: x4.5 Mark Bulk, x6.6 Luck, x4.5 Karma</li>
                <li><strong>TIGER (4.5%)</strong>: Max: x9 Soulfire, x3.6 Mark Luck, x7.5 Essence</li>
                <li><strong>PHOENIX (2.5%)</strong>: Max: x9 Insight, x8.4 Soulfire, x7.5 Karma</li>
                <li><strong>QILIN (1.4%)</strong>: Max: x4.5 W1 Stats, x5.4 Mark Bulk, x4.2 Mark Luck, x4.5 Mark Speed</li>
                <li><strong>DRAGON (0.6%)</strong>: Max: x6 W1 Stats, x6 Mark Bulk, x4.5 Mark Luck, x6 Mark Speed, +1 Mark Clone</li>
                <li><strong>LEVIATHAN (1/3M)</strong>: Max: x8 W1-W5 Stats, x15 Mark Bulk, x11 Mark Luck, x11 Mark Speed, +5 Mark Clone</li>
            </ul>
        </div>

        <!-- Section 2: W3 ROOTS -->
        <div style="background-color: #1f2937; border-left: 4px solid #8b5cf6; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #a78bfa; margin-top: 0;">W3 SPIRITUAL ROOTS</h4>
            <ul style="margin-top: 0;">
                <li><strong>LESSER ROOTS (89.8%)</strong>: Max: X2.85 Quasar</li>
                <li><strong>GREATER ROOTS (9.1%)</strong>: Max: x4.25 Miasma, x4.25 Remnants</li>
                <li><strong>HEAVENLY ROOTS (1.0%)</strong>: Max: x3.8 Miasma, x5.7 Remnants, x3.8 Damage</li>
                <li><strong>ANOMALOUS ROOTS (0.10%)</strong>: Max: x5.7 Ash, x9.5 Miasma, x2.47 Manual Luck</li>
                <li><strong>ANCIENT ROOTS (0.030%)</strong>: Max: x5.7 W3 Stats, x3.23 Manual Luck, x7.6 Remnants</li>
                <li><strong>CHAOS ROOTS (0.010%)</strong>: Max: x7.6 W1-W3 Stats, x7.6 Damage, X3.8 Manual Luck, +2 Mark clone</li>
            </ul>
        </div>
    `
},

// === ANCIENT SCRIPTURES / SECRET LOCATIONS DATA ===
"scriptures_guide": {
    title: "Scriptures Locations",
    content: `
        <h3>Scriptures Locations</h3>

        <div style="background-color: #1f2937; border-left: 4px solid #f59e0b; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #fbbf24; margin-top: 0;">Scripture Locations & Images</h4>
            
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 20px;">
                    <strong style="color: #fcd34d;">1. Behind barrel beside of dungeon 2 door</strong>
                    <div style="margin-top: 8px;">
                        <img src=images/scripture1.png" alt="Behind barrel beside of dungeon 2 door" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #fcd34d;">2. Behind qi level area on mushroom (w1)</strong>
                    <div style="margin-top: 8px;">
                        <img src="images/scripture2.png" alt="Behind qi level area on mushroom (w1)" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #fcd34d;">3. Go above wall and look behind the walls (near quasar wall) (w2)</strong>
                    <div style="margin-top: 8px;">
                        <img src="images/scripture3.png" alt="Go above wall and look behind the walls (near quasar wall) (w2)" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #fcd34d;">4. Between 2 rock behind w4 portal (w3)</strong>
                    <div style="margin-top: 8px;">
                        <img src=images/scripture4.png" alt="Between 2 rock behind w4 portal (w3)" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #fcd34d;">5. In yellow pond (w4)</strong>
                    <div style="margin-top: 8px;">
                        <img src="images/scripture5.png" alt="In yellow pond (w4)" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #fcd34d;">6. Behind w5 portal (w5)</strong>
                    <div style="margin-top: 8px;">
                        <img src="images/scripture6.png" alt="Behind w5 portal (w5)" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #fcd34d;">7. Behind the walls of w6 look between the space that 2 wall make - near big mushroom (w6)</strong>
                    <div style="margin-top: 8px;">
                        <img src="images/scripture7.png" alt="Behind the walls of w6 look between the space that 2 wall make - near big mushroom (w6)" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #fcd34d;">8. Middle of constellation (w7)</strong>
                    <div style="margin-top: 8px;">
                        <img src="images/scripture8.png" alt="Middle of constellation (w7)" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
                    </div>
                </li>
            </ul>
        </div>
    `
},

// === MARKS / MARKS LOCATIONS DATA ===
"secret_upgrades_guide": {
    title: "Secret Upgrades",
    content: `
        <h3>Secret Upgrades</h3>

        <div style="background-color: #1f2937; border-left: 4px solid #8b5cf6; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #a78bfa; margin-top: 0;">Marks Upgrades & Locations</h4>
            
            <ul style="list-style-type: none; padding-left: 0;">
                <li style="margin-bottom: 20px;">
                    <strong style="color: #c4b5fd;">Hunter - w1 | 10Ocd stars | x2 remnants , x2 damage , +1 beast core drop.</strong>[cite: 1, 14]
                    <div style="margin-top: 8px;">
                        <img src="images/hunter.png" alt="Hunter Mark Location" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />[cite: 14]
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #c4b5fd;">Hidden power - w2 | 200Qivg insight | x126M qi , x16M luck.</strong>[cite: 2, 13]
                    <div style="margin-top: 8px;">
                        <img src="images/hidden_power.png" alt="Hidden Power Mark Location" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />[cite: 13]
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #c4b5fd;">Volcanic terror - w3 | 3Ud ash | x3 ash , x2 karma , x2 mark bulk , x5 mark speed.</strong>[cite: 3, 17]
                    <div style="margin-top: 8px;">
                        <img src="images/volcanic_terror.png" alt="Volcanic Terror Mark Location" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />[cite: 17]
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #c4b5fd;">Heavenly master - w4 | 50Qi faith | x100 laws , x3 citizens , x5 faith, x15 mark speed.</strong>[cite: 4, 11]
                    <div style="margin-top: 8px;">
                        <img src="images/heavenly_master.png" alt="Heavenly Master Mark Location" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />[cite: 11]
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #c4b5fd;">Hegemony - w1 | 10Qa divinity | 2x stats.</strong>[cite: 5, 12]
                    <div style="margin-top: 8px;">
                        <img src="images/hegemony.png" alt="Hegemony Mark Location" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />[cite: 12]
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #c4b5fd;">Parallel world - w5 | 1.5Qisg laws | x2 material chance , +5 world tiers , unlocks divinity board 3.</strong>[cite: 6, 15]
                    <div style="margin-top: 8px;">
                        <img src="images/parallel_world.png" alt="Parallel World Mark Location" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />[cite: 15]
                    </div>
                </li>

                <li style="margin-bottom: 20px;">
                    <strong style="color: #c4b5fd;">Resolution - w8 | 10Dc endurance | 10x endurance, x2 path speed ,2x path bulk. 2x path luck</strong>[cite: 7, 16]
                    <div style="margin-top: 8px;">
                        <img src="images/resolution.png" alt="Resolution Mark Location" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />[cite: 16]
                    </div>
                </li>
            </ul>
        </div>
    `
},

// === NUMBER NOTATION / SUFFIXES DATA ===
"suffixes_guide": {
    title: "Game Suffixes Guide",
    content: `
        <h3Game Suffixes Guide</h3>

        <!-- Section 1: Basic Numbers & Decillion Series -->
        <div style="background-color: #1f2937; border-left: 4px solid #3b82f6; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #60a5fa; margin-top: 0;">Basic Numbers</h4>
            <ul style="margin-top: 0;">
                <li><strong>K</strong> = Thousand (1e+3)</li>
                <li><strong>M</strong> = Million (1e+6)</li>
                <li><strong>B</strong> = Billion (1e+9)</li>
                <li><strong>T</strong> = Trillion (1e+12)</li>
                <li><strong>Qa</strong> = Quadrillion (1e+15)</li>
                <li><strong>Qi</strong> = Quintillion (1e+18)</li>
                <li><strong>Sx</strong> = Sextillion (1e+21)</li>
                <li><strong>Sp</strong> = Septillion (1e+24)</li>
                <li><strong>Oc</strong> = Octillion (1e+27)</li>
                <li><strong>No</strong> = Nonillion (1e+30)</li>
            </ul>

            <h4 style="color: #60a5fa; margin-top: 12px;">Decillion Series</h4>
            <ul style="margin-top: 0;">
                <li><strong>Dc</strong> = Decillion (1e+33)</li>
                <li><strong>UD</strong> = Undecillion (1e+36)</li>
                <li><strong>DD</strong> = Duodecillion (1e+39)</li>
                <li><strong>TD</strong> = Tredecillion (1e+42)</li>
                <li><strong>Qad</strong> = Quattuordecillion (1e+45)</li>
                <li><strong>Qid</strong> = Quindecillion (1e+48)</li>
                <li><strong>Sxd</strong> = Sexdecillion (1e+51)</li>
                <li><strong>Spd</strong> = Septendecillion (1e+54)</li>
                <li><strong>Ocd</strong> = Octodecillion (1e+57)</li>
                <li><strong>Nod</strong> = Novemdecillion (1e+60)</li>
            </ul>
        </div>

        <!-- Section 2: Vigintillion & Trigintillion Series -->
        <div style="background-color: #1f2937; border-left: 4px solid #8b5cf6; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #a78bfa; margin-top: 0;">Vigintillion Series</h4>
            <ul style="margin-top: 0;">
                <li><strong>Vg</strong> = Vigintillion (1e+63)</li>
                <li><strong>Uvg</strong> = Unvigintillion (1e+66)</li>
                <li><strong>Dvg</strong> = Duovigintillion (1e+69)</li>
                <li><strong>Tvg</strong> = Trevigintillion (1e+72)</li>
                <li><strong>Qavg</strong> = Quattuorvigintillion (1e+75)</li>
                <li><strong>Qivg</strong> = Quinvigintillion (1e+78)</li>
                <li><strong>Sxvg</strong> = Sexvigintillion (1e+81)</li>
                <li><strong>Spvg</strong> = Septenvigintillion (1e+84)</li>
                <li><strong>Ocvg</strong> = Octavigintillion (1e+87)</li>
                <li><strong>Novg</strong> = Novemvigintillion (1e+90)</li>
            </ul>

            <h4 style="color: #a78bfa; margin-top: 12px;">Trigintillion Series</h4>
            <ul style="margin-top: 0;">
                <li><strong>Tg</strong> = Trigintillion (1e+93)</li>
                <li><strong>Utg</strong> = Untrigintillion (1e+96)</li>
                <li><strong>Dtg</strong> = Duotrigintillion (1e+99)</li>
                <li><strong>Ttg</strong> = Trestrigintillion (1e+102)</li>
                <li><strong>Qatg</strong> = Quattuortrigintillion (1e+105)</li>
                <li><strong>Qitg</strong> = Quintrigintillion (1e+108)</li>
                <li><strong>Sxtg</strong> = Sextrigintillion (1e+111)</li>
                <li><strong>Sptg</strong> = Septentrigintillion (1e+114)</li>
                <li><strong>Octg</strong> = Octotrigintillion (1e+117)</li>
                <li><strong>Notg</strong> = Novemtrigintillion (1e+120)</li>
            </ul>
        </div>

        <!-- Section 3: Quadragintillion & Quinquagintillion Series -->
        <div style="background-color: #1f2937; border-left: 4px solid #10b981; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #34d399; margin-top: 0;">Quadragintillion Series</h4>
            <ul style="margin-top: 0;">
                <li><strong>Qag</strong> = Quadragintillion (1e+123)</li>
                <li><strong>Uqag</strong> = Unquadragintillion (1e+126)</li>
                <li><strong>Dqag</strong> = Duoquadragintillion (1e+129)</li>
                <li><strong>Tqag</strong> = Tresquadragintillion (1e+132)</li>
                <li><strong>Qaqag</strong> = Quattuorquadragintillion (1e+135)</li>
                <li><strong>Qiqag</strong> = Quinquadragintillion (1e+138)</li>
                <li><strong>Sxqag</strong> = Sexquadragintillion (1e+141)</li>
                <li><strong>Spqag</strong> = Septenquadragintillion (1e+144)</li>
                <li><strong>Ocqag</strong> = Octoquadragintillion (1e+147)</li>
                <li><strong>Noqag</strong> = Novemquadragintillion (1e+150)</li>
            </ul>

            <h4 style="color: #34d399; margin-top: 12px;">Quinquagintillion Series</h4>
            <ul style="margin-top: 0;">
                <li><strong>Qig</strong> = Quinquagintillion (1e+153)</li>
                <li><strong>Uqig</strong> = Unquinquagintillion (1e+156)</li>
                <li><strong>Dqig</strong> = Duoquinquagintillion (1e+159)</li>
                <li><strong>Tqig</strong> = Tresquinquagintillion (1e+162)</li>
                <li><strong>Qaqig</strong> = Quattuorquinquagintillion (1e+165)</li>
                <li><strong>Qiqig</strong> = Quinquinquagintillion (1e+168)</li>
                <li><strong>Sxqig</strong> = Sexquinquagintillion (1e+171)</li>
                <li><strong>Spqig</strong> = Septenquinquagintillion (1e+174)</li>
                <li><strong>Ocqig</strong> = Octoquinquagintillion (1e+177)</li>
                <li><strong>Noqig</strong> = Novemquinquagintillion (1e+180)</li>
            </ul>
        </div>

        <!-- Section 4: Sexagintillion & Septuagintillion Series -->
        <div style="background-color: #1f2937; border-left: 4px solid #f59e0b; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #fbbf24; margin-top: 0;">Sexagintillion Series</h4>
            <ul style="margin-top: 0;">
                <li><strong>Sg</strong> = Sexagintillion (1e+183)</li>
                <li><strong>USg</strong> = Unsexagintillion (1e+186)</li>
                <li><strong>DSg</strong> = Duosexagintillion (1e+189)</li>
                <li><strong>Tsg</strong> = Tresexagintillion (1e+192)</li>
                <li><strong>Qasg</strong> = Quattuorsexagintillion (1e+195)</li>
                <li><strong>Qisg</strong> = Quinsexagintillion (1e+198)</li>
                <li><strong>Sxsg</strong> = Sexsexagintillion (1e+201)</li>
                <li><strong>Spsg</strong> = Septensexagintillion (1e+204)</li>
                <li><strong>Ocsg</strong> = Octosexagintillion (1e+207)</li>
                <li><strong>Nosg</strong> = Novemsexagintillion (1e+210)</li>
            </ul>

            <h4 style="color: #fbbf24; margin-top: 12px;">Septuagintillion Series</h4>
            <ul style="margin-top: 0;">
                <li><strong>St</strong> = Septuagintillion (1e+213)</li>
                <li><strong>Ut</strong> = Unseptuagintillion (1e+216)</li>
                <li><strong>Dst</strong> = Duoseptuagintillion (1e+219)</li>
                <li><strong>Tst</strong> = Treseptuagintillion (1e+222)</li>
                <li><strong>Qast</strong> = Quattuorseptuagintillion (1e+225)</li>
                <li><strong>Qist</strong> = Quinseptuagintillion (1e+228)</li>
                <li><strong>Sxst</strong> = Sexseptuagintillion (1e+231)</li>
                <li><strong>Spst</strong> = Septenseptuagintillion (1e+234)</li>
                <li><strong>Ocst</strong> = Octoseptuagintillion (1e+237)</li>
                <li><strong>Nost</strong> = Novemseptuagintillion (1e+240)</li>
            </ul>
        </div>

        <!-- Section 5: Octogintillion & Nonagintillion Series -->
        <div style="background-color: #1f2937; border-left: 4px solid #ef4444; padding: 12px; margin-bottom: 16px; border-radius: 4px;">
            <h4 style="color: #f87171; margin-top: 0;">Octogintillion Series</h4>
            <ul style="margin-top: 0;">
                <li><strong>Og</strong> = Octogintillion (1e+243)</li>
                <li><strong>Uog</strong> = Unoctogintillion (1e+246)</li>
                <li><strong>Dog</strong> = Duooctogintillion (1e+249)</li>
                <li><strong>Tog</strong> = Treoctogintillion (1e+252)</li>
                <li><strong>Qaog</strong> = Quattuoroctogintillion (1e+255)</li>
                <li><strong>Qiog</strong> = Quinoctogintillion (1e+258)</li>
                <li><strong>Sxog</strong> = Sexoctogintillion (1e+261)</li>
                <li><strong>Spog</strong> = Septemoctogintillion (1e+264)</li>
                <li><strong>Ocog</strong> = Octooctogintillion (1e+267)</li>
                <li><strong>Noog</strong> = Novemoctogintillion (1e+270)</li>
            </ul>

            <h4 style="color: #f87171; margin-top: 12px;">Nonagintillion Series</h4>
            <ul style="margin-top: 0;">
                <li><strong>Ng</strong> = Nonagintillion (1e+273)</li>
                <li><strong>Ung</strong> = Unnonagintillion (1e+276)</li>
                <li><strong>Dng</strong> = Duononagintillion (1e+279)</li>
                <li><strong>Tng</strong> = Trenonagintillion (1e+282)</li>
                <li><strong>Qang</strong> = Quattuornonagintillion (1e+285)</li>
                <li><strong>Qing</strong> = Quinnonagintillion (1e+288)</li>
                <li><strong>Sxng</strong> = Sexnonagintillion (1e+291)</li>
                <li><strong>Spng</strong> = Septemnonagintillion (1e+294)</li>
                <li><strong>Ocng</strong> = Octononagintillion (1e+297)</li>
                <li><strong>Nong</strong> = Novemnonagintillion (1e+300)</li>
            </ul>
        </div>
    `
},

"gamepass_tierlist": {
    title: "Gamepass Tier List",
    content: `
            <div style="margin-top: 8px;">
                    <img src="images/gamepass_tier.png" alt="Gamepass tier list" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
             </div>
    `},

"dungeons_overview": {
    title: "Overview",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},

"dungeons_gear": {
    title: "Gear",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},

"dungeons_classes": {
    title: "Classes",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},

"dungeons_tree": {
    title: "Upgrade Tree",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},

"world1_time": {
    title: "Time Milestone",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world1_mark_opener": {
    title: "Mark Opener Milestone",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world1_temperings": {
    title: "Body Temperings",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world1_bloodlines": {
    title: "Bloodlines",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world1_karma": {
    title: "Karma Milestones",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},

"world2_beast": {
    title: "Beast Milestones",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},

"world3_manuals": {
    title: "Manuals",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world3_roots": {
    title: "Spirit Roots",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world3_challenges": {
    title: "Challenges",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world4_law_synth": {
    title: "Law synthesis",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world5_nothing": {
    title: "Time Milestone",
    content: `
            uh somehow w5 doesnt have anything to add here
    `},
"world6_relics": {
    title: "Relics",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world6_floor_prestige": {
    title: "Floor Prestiges",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world6_angel": {
    title: "Angel Milestones",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world7_meridians": {
    title: "Meridians",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world7_dao_boost": {
    title: "Dao Boosts",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world7_origins": {
    title: "Origin Challenges",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world8_arts": {
    title: "Arts",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"world8_arts_mastery": {
    title: "Arts Mastery",
    content: `
            soon, for now check <a href="https://trello.com/b/0uCSKao3/immortality-incremental" target="_blank" style="color: #4ea8de; text-decoration: underline;">
                                        https://trello.com/b/0uCSKao3/immortality-incremental
                                </a>
    `},
"main_sect": {
    title: "Sect Main Menu",
    content: `
            <div style="margin-top: 8px;">
                    <img src="images/sect_main.png" alt="Main sect menu" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
             </div>
    `},
"quests_sect": {
    title: "Sect Quest Menu",
    content: `
            <div style="margin-top: 8px;">
                    <img src="images/sect_quests.png" alt="Quest sect menu" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
             </div>
    `},
"upgrades_sect": {
    title: "Sect Upgrades Menu",
    content: `
            <div style="margin-top: 8px;">
                    <img src="images/sect_buffs1.png" alt="Upgrades sect menu" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
             </div>
             <div style="margin-top: 8px;">
                    <img src="images/sect_buffs2.png" alt="Upgrades sect menu" style="max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #374151;" />
             </div>
    `},
};