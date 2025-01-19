const emotions = {
  Fearful: {
    definition: 'A basic emotion experienced in response to threat or danger.',
    subEmotions: {
      Scared: {
        definition: 'Feeling afraid or uneasy.',
        subEmotions: {
          Helpless: {
            definition: 'Feeling powerless or unable to cope.',
            subEmotions: {}
          },
          Frightened: {
            definition: 'Experiencing intense fear.',
            subEmotions: {}
          }
        }
      },
      Anxious: {
        definition: 'Feeling worried or uneasy about something.',
        subEmotions: {
          Overwhelmed: {
            definition: 'Feeling overcome by intense emotions or stress.',
            subEmotions: {}
          },
          Worried: {
            definition: 'Feeling troubled or concerned.',
            subEmotions: {}
          }
        }
      },
      Insecure: {
        definition: 'Lacking confidence or assurance.',
        subEmotions: {
          Inadequate: {
            definition: 'Feeling not good enough or insufficient.',
            subEmotions: {}
          },
          Inferior: {
            definition: 'Feeling lower in status or quality than others.',
            subEmotions: {}
          }
        }
      },
      Weak: {
        definition: 'Lacking strength or power.',
        subEmotions: {
          Worthless: {
            definition: 'Feeling of having no value or worth.',
            subEmotions: {}
          },
          Insignificant: {
            definition: 'Feeling unimportant or meaningless.',
            subEmotions: {}
          }
        }
      },
      Rejected: {
        definition: 'Feeling unwanted or cast aside.',
        subEmotions: {
          Excluded: {
            definition: 'Feeling left out or not included.',
            subEmotions: {}
          },
          Persecuted: {
            definition: 'Feeling harassed or oppressed.',
            subEmotions: {}
          }
        }
      },
      Threatened: {
        definition: 'Feeling endangered or at risk.',
        subEmotions: {
          Nervous: {
            definition: 'Fearful that something bad or unpleasant will happen.',
            subEmotions: {}
          },
          Exposed: {
            definition: 'Feeling vulnerable or unprotected.',
            subEmotions: {}
          }
        }
      }
    }
  },
  Angry: {
    definition: 'A strong feeling of displeasure or hostility.',
    subEmotions: {
      'Let Down': {
        definition: 'Feeling disappointed by someone or something.',
        subEmotions: {
          Betrayed: {
            definition: 'Feeling deceived or misled by others.',
            subEmotions: {}
          },
          Resentful: {
            definition: 'Feeling bitter or indignant.',
            subEmotions: {}
          }
        }
      },
      Humiliated: {
        definition: 'Feeling mortified or deeply embarrassed.',
        subEmotions: {
          Disrespected: {
            definition: 'Feeling treated without respect.',
            subEmotions: {}
          },
          Ridiculed: {
            definition: 'Feeling mocked or made fun of.',
            subEmotions: {}
          }
        }
      },
      Bitter: {
        definition: 'Feeling resentful or cynical.',
        subEmotions: {
          Indignant: {
            definition: 'Feeling anger over unfair treatment.',
            subEmotions: {}
          },
          Violated: {
            definition: 'Feeling that your rights or privacy have been breached.',
            subEmotions: {}
          }
        }
      },
      Mad: {
        definition: 'Feeling very angry or irritated.',
        subEmotions: {
          Furious: {
            definition: 'Experiencing intense anger.',
            subEmotions: {}
          },
          Jealous: {
            definition: "Feeling resentful of someone's success or advantages.",
            subEmotions: {}
          }
        }
      },
      Aggressive: {
        definition: 'Feeling ready to attack or confront.',
        subEmotions: {
          Provoked: {
            definition: 'Feeling incited to anger or action.',
            subEmotions: {}
          },
          Hostile: {
            definition: 'Feeling unfriendly or antagonistic.',
            subEmotions: {}
          }
        }
      },
      Distant: {
        definition: 'Feeling emotionally remote or detached.',
        subEmotions: {
          Withdrawn: {
            definition: 'Feeling retreated or pulled back.',
            subEmotions: {}
          },
          Numb: {
            definition: 'Feeling emotionally unresponsive.',
            subEmotions: {}
          }
        }
      },
      Critical: {
        definition: 'Feeling inclined to find fault.',
        subEmotions: {
          Skeptical: {
            definition: 'Feeling doubtful or questioning.',
            subEmotions: {}
          },
          Dismissive: {
            definition: 'Feeling rejecting or refusing to consider.',
            subEmotions: {}
          }
        }
      }
    }
  },
  Disgusted: {
    definition: 'Feeling strong aversion or repugnance.',
    subEmotions: {
      Disapproving: {
        definition: 'Feeling negative judgment or disapproval.',
        subEmotions: {
          Judgmental: {
            definition: 'Tending to criticize or form opinions too quickly.',
            subEmotions: {}
          },
          Embarrassed: {
            definition: 'Feeling self-conscious or ashamed.',
            subEmotions: {}
          }
        }
      },
      Disappointed: {
        definition: 'Feeling sad or displeased by something not meeting expectations.',
        subEmotions: {
          Appalled: {
            definition: 'Feeling horror or dismay.',
            subEmotions: {}
          },
          Revolted: {
            definition: 'Feeling intense disgust.',
            subEmotions: {}
          }
        }
      },
      Awful: {
        definition: 'Feeling very bad or unpleasant.',
        subEmotions: {
          Nauseated: {
            definition: 'Feeling sick or disgusted.',
            subEmotions: {}
          },
          Detestable: {
            definition: 'Feeling deserving of intense dislike.',
            subEmotions: {}
          }
        }
      },
      Repelled: {
        definition: 'Feeling driven away or repulsed.',
        subEmotions: {
          Horrified: {
            definition: 'Feeling intense shock or disgust.',
            subEmotions: {}
          },
          Hesitant: {
            definition: 'Feeling reluctant or uncertain.',
            subEmotions: {}
          }
        }
      }
    }
  },
  Sad: {
    definition: 'Feeling unhappy or sorrowful.',
    subEmotions: {
      Hurt: {
        definition: 'Feeling emotional pain or distress.',
        subEmotions: {
          Embarrassed: {
            definition: 'Feeling uncomfortable or self-conscious.',
            subEmotions: {}
          },
          Disappointed: {
            definition: 'Feeling let down or unfulfilled.',
            subEmotions: {}
          }
        }
      },
      Depressed: {
        definition: 'Feeling severe despondency and dejection.',
        subEmotions: {
          Inferior: {
            definition: 'Feeling lower in status or quality.',
            subEmotions: {}
          },
          Empty: {
            definition: 'Feeling void of emotion or purpose.',
            subEmotions: {}
          }
        }
      },
      Guilty: {
        definition: 'Feeling responsible for wrongdoing.',
        subEmotions: {
          Remorseful: {
            definition: 'Feeling deep regret or conscience.',
            subEmotions: {}
          },
          Ashamed: {
            definition: 'Feeling shame or embarrassment.',
            subEmotions: {}
          }
        }
      },
      Despair: {
        definition: 'Feeling complete loss of hope.',
        subEmotions: {
          Grief: {
            definition: 'Feeling deep sorrow, especially from loss.',
            subEmotions: {}
          },
          Powerlessness: {
            definition: 'Feeling lacking in power or control.',
            subEmotions: {}
          }
        }
      },
      Vulnerable: {
        definition: 'Feeling susceptible to harm.',
        subEmotions: {
          Victimized: {
            definition: 'Feeling treated as a victim.',
            subEmotions: {}
          },
          Fragile: {
            definition: 'Feeling easily broken or damaged.',
            subEmotions: {}
          }
        }
      },
      Lonely: {
        definition: 'Feeling sad from being alone.',
        subEmotions: {
          Isolated: {
            definition: 'Feeling separated from others.',
            subEmotions: {}
          },
          Abandoned: {
            definition: 'Feeling deserted or left behind.',
            subEmotions: {}
          }
        }
      }
    }
  },
  Happy: {
    definition: 'Feeling or showing pleasure, contentment, or joy.',
    subEmotions: {
      Optimistic: {
        definition: 'Hopeful and confident about the future.',
        subEmotions: {
          Inspired: {
            definition: 'Feeling mentally stimulated to do something creative.',
            subEmotions: {}
          },
          Hopeful: {
            definition: 'Feeling positive about future outcomes.',
            subEmotions: {}
          }
        }
      },
      Trusting: {
        definition: 'Feeling able to rely on others.',
        subEmotions: {
          Intimate: {
            definition: 'Feeling closely connected.',
            subEmotions: {}
          },
          Sensitive: {
            definition: 'Feeling responsive to others emotions.',
            subEmotions: {}
          }
        }
      },
      Peaceful: {
        definition: 'Free from disturbance; tranquil.',
        subEmotions: {
          Loving: {
            definition: 'Feeling deep affection or attachment.',
            subEmotions: {}
          },
          Thankful: {
            definition: 'Feeling grateful and appreciative.',
            subEmotions: {}
          }
        }
      },
      Powerful: {
        definition: 'Feeling strong and capable.',
        subEmotions: {
          Courageous: {
            definition: 'Feeling brave and confident.',
            subEmotions: {}
          },
          Creative: {
            definition: 'Feeling imaginative and innovative.',
            subEmotions: {}
          }
        }
      },
      Accepted: {
        definition: 'Feeling welcomed and approved.',
        subEmotions: {
          Respected: {
            definition: 'Feeling admired or esteemed.',
            subEmotions: {}
          },
          Valued: {
            definition: 'Feeling appreciated and important.',
            subEmotions: {}
          }
        }
      },
      Proud: {
        definition: 'Feeling deep pleasure from achievements.',
        subEmotions: {
          Successful: {
            definition: 'Feeling accomplished or achieving goals.',
            subEmotions: {}
          },
          Confident: {
            definition: 'Feeling self-assured and capable.',
            subEmotions: {}
          }
        }
      },
      Interested: {
        definition: 'Feeling engaged or curious.',
        subEmotions: {
          Curious: {
            definition: 'Feeling eager to learn or know.',
            subEmotions: {}
          },
          Inquisitive: {
            definition: 'Feeling inclined to investigate.',
            subEmotions: {}
          }
        }
      },
      Content: {
        definition: 'Feeling satisfied and at peace.',
        subEmotions: {
          Free: {
            definition: 'Feeling unrestricted and liberated.',
            subEmotions: {}
          },
          Joyful: {
            definition: 'Feeling great happiness and delight.',
            subEmotions: {}
          }
        }
      },
      Playful: {
        definition: 'Feeling light-hearted and fun.',
        subEmotions: {
          Aroused: {
            definition: 'Feeling awakened or stimulated.',
            subEmotions: {}
          },
          Cheeky: {
            definition: 'Feeling impudent or playfully bold.',
            subEmotions: {}
          }
        }
      }
    }
  },
  Surprised: {
    definition: 'Feeling astonished or taken aback.',
    subEmotions: {
      Excited: {
        definition: 'Feeling very enthusiastic and eager.',
        subEmotions: {
          Energetic: {
            definition: 'Feeling full of energy and vigor.',
            subEmotions: {}
          },
          Eager: {
            definition: 'Feeling keen interest or enthusiasm.',
            subEmotions: {}
          }
        }
      },
      Amazed: {
        definition: 'Feeling great wonder or astonishment.',
        subEmotions: {
          Awe: {
            definition: 'Feeling reverential wonder.',
            subEmotions: {}
          },
          Astonished: {
            definition: 'Feeling greatly surprised.',
            subEmotions: {}
          }
        }
      },
      Confused: {
        definition: 'Feeling unclear or uncertain.',
        subEmotions: {
          Perplexed: {
            definition: 'Feeling completely baffled.',
            subEmotions: {}
          },
          Disillusioned: {
            definition: 'Feeling disappointed in something believed in.',
            subEmotions: {}
          }
        }
      },
      Startled: {
        definition: 'Feeling suddenly shocked or alarmed.',
        subEmotions: {
          Shocked: {
            definition: 'Feeling sudden disturbance or surprise.',
            subEmotions: {}
          },
          Dismayed: {
            definition: 'Feeling consternation and distress.',
            subEmotions: {}
          }
        }
      }
    }
  },
  Bad: {
    definition: 'Feeling unwell or unpleasant.',
    subEmotions: {
      Tired: {
        definition: 'Feeling in need of rest or sleep.',
        subEmotions: {
          Unfocused: {
            definition: 'Having trouble concentrating.',
            subEmotions: {}
          },
          Sleepy: {
            definition: 'Feeling drowsy or ready to sleep.',
            subEmotions: {}
          }
        }
      },
      Stressed: {
        definition: 'Feeling subject to pressure or tension.',
        subEmotions: {
          'Out of Control': {
            definition: 'Feeling unable to manage or cope.',
            subEmotions: {}
          },
          Overwhelmed: {
            definition: 'Feeling overcome by too much of something.',
            subEmotions: {}
          }
        }
      },
      Busy: {
        definition: 'Feeling actively engaged or occupied.',
        subEmotions: {
          Rushed: {
            definition: 'Feeling hurried or pressured by time.',
            subEmotions: {}
          },
          Pressured: {
            definition: 'Feeling stressed by demands.',
            subEmotions: {}
          }
        }
      },
      Bored: {
        definition: 'Feeling weary from lack of interest.',
        subEmotions: {
          Apathetic: {
            definition: 'Feeling lack of interest or concern.',
            subEmotions: {}
          },
          Indifferent: {
            definition: 'Feeling lack of interest or concern.',
            subEmotions: {}
          }
        }
      }
    }
  }
};

export default emotions; 