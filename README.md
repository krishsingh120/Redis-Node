# Redis

## What is Redis?

Redis (Remote Dictionary Server) is:

- An in-memory data store

- Extremely fast

  - Used as:
    - Cache
    - Database
    - Message broker
    - Queue
    - Real-time data engine

> Data is stored in RAM, not disk → microsecond latency

## Why Redis is FAST?

- In-memory (RAM)
- Single-threaded (no locking overhead)
- Optimized data structures
- Non-blocking I/O


## What it is

### 1. Cache
- Cache = temporary fast storage
- Jo data bar-bar read hota hai, usko memory me rakh dete hain taaki DB hit na ho.

### 2. Database
- Database = permanent storage (source of truth)
- Data loss acceptable nahi hota.



### 3. Message Broker
- A message broker is a system that routes messages between producers and consumers.
- Message Broker = communication system
- Services ek-dusre se direct baat nahi karte.


### 4. Queue
- A queue is a system where tasks are stored and processed later by workers.
- Queue = background task processor
- Kaam abhi nahi, baad me execute hoga.

### 5. Real-Time Data Engine
- Real-time data engine = live updates system
- Milliseconds me data update & broadcast.


## Message Broker vs Queue (Clear Difference)
#### Core Idea (One Line)
- Message Broker → “How services talk to each other”
- Queue → “How background tasks get done”