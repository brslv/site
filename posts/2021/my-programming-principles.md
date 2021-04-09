---
layout: post-layout.pug
title: My programming principles
sdate: 2021-04-09
tags: ["post"]
meta_og_image: /img/posts/2021/my-programming-principles.jpeg
meta_description: Understand why principles are important, how to expand horizontally and what does it mean for a design to emerge.
---

![Mechanical keyboard](/img/posts/2021/my-programming-principles.jpg "Mechanical keyboard")

###### Photo by [bady abbas](https://unsplash.com/@bady?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText") on [Unsplash](https://unsplash.com/s/photos/mechanical-keyboard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

A principle is a "fundamental truth or proposition, that serves as the foundation for a system of belief or behavior".

Simply put, it's the "why" behind our thoughts and actions.

<!-- e -->If you want to understand why principles are important, how to expand horizontally and what does it mean for a design to emerge continue reading.<!-- /e -->

## Why should I care?

Maybe you don't realize it, but you already operate on a set of internalized principles. It's one of these things that we let run in the background, without being conscious about it.

It's a good thing because we don't have to map every single thought or action to a principle in our head. It happens automatically. We don't have to think about it.

But on the other side, it's bad, because the mapping can go way off and map to some wrong conclusions about reality.

Here's an example.

We go to work or start a business, because we have to survive, but also because we know that a productive life is the most _efficient_ way to survive. So, our principle is: _do productive things to survive_.

Now, if we had the wrong principle internalized and we weren't mindful about it, we would simply robber a bank and think it's OK. We have internalized a principle, based on which in order to survive _we don't have to do anything productive_. We're human beings and we _deserve_ to be alive and have an "easy" life, so the "rich" guys at the bank must pay their social duty and we're allowed to go and take what _belongs_ to us. Because we _deserve_ it.

Now, it's clear that the wrong principle in the second example leads to bad life decisions. What's fascinating is that there are people that _do_ think this way. People who internalized the wrong principle. And they don't even realize this.

Having the wrong principles without realizing it is way worse than having them and doing something about it.

That's why we should make it a routine to revise our framework. Not only in our professional field but in life, love, finance, etc. Our principles are the kernel of our operating system. They are the basis of the way we live, work and thrive. And if we're not mindful of the fundamentals, things can go really bad.

It's mental work that has to be done beforehand, a volitional effort which we **must** not skip!

The current article is in a way such a reflection, narrowed down to the principles in my craft.

## What is a programming principle

It's a guiding set of truths for the way we structure our programs, devise solutions to problems, and approach common software tasks in the process of building a usable product.

DRY (Don't Repeat Yourself) is such a principle you might have heard of.

A (programming) principle should be general enough to serve as a useful heuristic in many seemingly unrelated scenarios. But it must not be too abstract, as it would be hard to apply to any concrete.

Let's get started with my set of principles in no particular order.

## Simplicity is not a visual trait

I see many developers fall into the trap of the so-called "simplicity". What's propagated as simple these days is not simple at all, but merely a way to make it _seem_ simple. It's an important observation.

I know, because I've been there, too.

Squeezing functions to no more than 3 lines of code. Refactoring if statements to a single line or, God forbid, polymorphism.

I get the hype.

But the way this hype is packaged and labeled as "simplicity" is merely wrong. It's false.

Look, by making a function three lines of code, it doesn't get simpler. It just gets _faster_ to read. But not simpler.

It's like the tip of an iceberg. You see just 1% of the thing and the rest is drawn deep below the waters. And for what reason? To hide the fact that the iceberg is big?

Throughout the years I've seen so many icebergs, it's insane. And diving deep just to find out that it's so big, is a waste of energy.

You might think, well, ok, then what do you suggest, to write behemoth functions and turn my code into spaghetti?

Of course not.

> I want you to be less concerned by the _visual_ simplicity and more about the technical one.

If a thing is a thing(), don't make it a t(h(i(n(g)))). Don't make small t, h, i, n, g functions but leave the thing() as is. Even if it's 4+ lines of code (scary!). Some thing()s must stay thing()s.

## Comments\* on the way to prevent wrong abstractions

Another trap for inexperienced developers. The common wisdom that comments are bad.

I see where this comes from and I partially agree.

But not using comments can be as harmful as overusing them.

Let me explain.

When I was still a more junior developer, I was extracting functions out of nothing. Just to make my code more "expressive".

Extracting functions generally leads to the need to create new files and (probably) folders. It's like extracting the contents of your fridge into different fridges. One for eggs. One for ham. Another for the cheese and another one for the salads. You get the idea.

At first, you might think that now your food is neatly organized, but if you try it for a week, you'll quickly realize that what you did was a big mistake.

Now not only your fridges occupy more space at your home (whole fridge for 10 eggs, buddy!) but you have to keep a _mental map of what belongs where_.

The same was happening to me constantly. I was always overthinking how a piece of 2 lines of code should be organized by file/folder. Later when I had to use it, I had to reconstruct a mental map out of those pieces to make them fit together. Doing this exercise hundreds of times each day is a mind-draining experience.

Like trying to make dinner and having to open 20 fridges, one at a time, to see what's in there and come up with a recipe.

Good luck.

But why am I telling you this?

Because what I do nowadays is exactly the opposite. I never introduce new files/folders in my projects just to make things more "expressive". Part of what helps me stay disciplined in this regard is comments.

**My use of comments is a way to prevent unintended, unneeded or simply wrong abstractions emerge.**

Instead of extracting each line to make it more readable, I simply leave it as is, or if needed, write a one-line comment above it and call it a day.

This way everything stays in the same function/file (fridge). And everything has its own block (shelf, if you keep up with the fridge analogy). I just put labels in there and the thing gets much more readable with the added benefit that it stays _compact_ at the same time.

At this point, a lot of people are screaming behind the screens. The most triggered ones even closed the tab. That's good.

I hear "and what about the fact that comments get outdated or even misleading, yadda, yadda"...

What if you put your eggs on the shelf with the ham? And even stick a tiny label on the eggs box saying "HAM". Are the eggs now ham? If you still get the eggs out of the fridge thinking that it's a ham, the problem most probably is not the shelf nor the label, but the subject that got the object out of the fridge. :)

I mean, the argument with the misleading comments sounds naive to me. We're not kids. You can stick a label to a car toy saying "SPACESHIP" and the kid would genuinely accept that it's exactly what it says. But a grownup would just fix the label and carry on (playing with the car toy :))).

Let's be honest here. Introducing new fridges is far more expensive than a misleading comment, which can just be deleted/fixed.

## Design emerges

Let's do a quick thought experiment.

Imagine a completely blank world. Blank as a blank page. There's nothing, just ground.

Imagine you are a being that has no conceptual knowledge. No words, no terms, no experience, no previous perceptual data. You are a blank being in a blank world.

Now, could such a being come up with the term _coffee shop_?

Of course not.

To have the term coffee shop, you have to build on top of two other terms - coffee and shop. You have to construct their meanings. But to have the concept of coffee, you have to introduce the term plant and the term seed. To have the term shop, you have to introduce countless other concepts, such as building, cashier, money, trade, etc, etc.

_It's obvious that having 0 reality, you're unable to construct higher concepts._

Yet, we still build software following exactly that same conviction.

_We still build concepts, having close to zero understanding of the underlying reality._

In practice, this means that you cannot simply introduce a _concept_ (think function/class/module) without having any evidence of what does the "internals" of the concept mean to the world (technical and business-wise), what it's based on and if it's a single event or a recurring pattern.

Going deeper into the details, having a loop that iterates a set of users, sends them emails, and assigns them a support team member, must not be immediately extracted to an `onboardUsers()` function. You must let "reality" (your program/business logic context) evolve to the point where it's obvious that sending emails _and_ assigning the users a support guy is part of the onboarding process.

In that sense, **the design of your code must emerge, it must not be forced by your subjective whims**. Literally, a product development guy must write this spec down:

> "The onboarding process consists of _sending an email_ and _assigning a support buddy_".

This is reality, and having the concept of _onboarding_ there, you're safe to step on it and introduce it to your software context.

Otherwise, let the loop be a loop and do its thing. Don't conceptualize it further. If it does many things, put a comment or two in there, but, please, don't introduce an "abstraction", a factory factory, a strategy, or whatever, where a comment would suffice. Concepts are easy to come up with but very hard to get disentangled.

## Reuse consciously

The most fundamental thing you're going to learn in an Economics 101 class is the theory of division of labor.

This "invention" is one of the few tipping points in human history. It's the right way to leverage other's people potential. The same fundamental principle works in every possible field of human life.

In software, too.

We can take advantage of using other people's solutions to common problems in the form of frameworks and libraries. It's great to be able to step on a giant's shoulders and we must do it so that we're able to build meaningful products in time without going crazy.

But I want to stress something that I see a lot of people do wrong here. And that's **going to the extreme.**

Having easy access to working software pieces and gluing them together is tempting, especially when we're in a rush or just don't want to engage in the process of coming up with solutions ourselves. And here is _the problem_. We're so used to reusing other people's code, that this now serves as _an excuse not to think_. Which is dangerous.

See, solving problems involves thinking. It is inevitable. Yes, we can come up with something just by mindlessly gluing pieces together, but if we want to be good at it and if we want to design quality, resilient solutions, we must engage in a thinking process. We must get our hands dirty from time to time. Outsourcing critical thinking decisions to a framework or a library has its consequences, and we **must** be aware of what they are.

Reusing extraneous code is a choice. And as with every choice in our lives, it depends on the context.

My principle here is: _Don't approach frameworks and libraries as defaults. Always consider reality, your context._

---

The last one is a bit more abstract. I've left it last intentionally. If you were to take a single principle out of this article, let it be this one.

## Expand horizontally

The way I would solve a given problem will most probably be different from the way you would do it. That's why programming is mostly a creative activity. Beyond the most simplistic problems, there are countless possibilities.

But how does one _come_ to a solution? I have a theory.

As with any other creative process out there, the result of coming up with a programming solution is a reflection of the creator's values, perceptions, fears, cravings, knowledge, etc. Our creative output is a mirror of ourselves.

Hence, the following is a leading principle for creatives:

> Being creators/problem-solvers we have the responsibility to expand ourselves not only vertically, but horizontally, so that our creative output gets more expressive and sophisticated in the process.

Let's deconstruct the terms vertical and horizontal expansion.

A Go developer "expands" vertically his knowledge by digging deeper into the Go ecosystem, learning advanced Go techniques, building a portfolio of projects in that field. It's what's mostly known as _specialization_.

The same developer "expands" horizontally his knowledge by learning about economics, physics, reading fiction, studying philosophy, design, playing guitar, learning to brew beer, etc. Going a bit more narrow, learning Docker, Rust, and building iOS apps can also be considered horizontal expansion.

> Every activity that adds another _dimension_ to the knowledge base of a person can be considered widening horizontally. In other words, to get better at our craft, we must get better at any craft.

People that are good at this are commonly labeled _generalists_.

Why is that so important for creatives?

Because, unlike solutions, problems are not so unique. You'll be surprised to see that most of our software problems are already solved in some other seemingly unrelated field. Like architecture, for example. Or economics. Or physics, design, philosophy. And by expanding horizontally your knowledge and _awareness_ of those problem/solution sets, you get smarter. You get more creative. You have _more data points_ to play around with, to connect. It's just easier to see patterns, to spot weaknesses, to design working abstractions.

It's not a novel idea. But it's powerful enough to serve as a guiding fundamental principle in my life. Consider expanding horizontally and becoming better at other crafts!

---

As this article became fart too long for my taste, I'd rather end it here.

I certainly have a few more principles to share about programming (and to some degree about life in general), but I'm gonna leave it for another article.

Thanks for reading. 🙏
