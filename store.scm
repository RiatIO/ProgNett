(define (make-lm)
  (list '*table*))

(define (lm-lookup-unigram lm string1)
  (let ((record (assoc string1 (cdr lm))))
    (if record
        (cdr (assoc '_count (cdr record)))
        #f)))

(define (lm-lookup-bigram lm string1 string2)
  (let ((subtable (assoc string1 (cdr lm))))
    (if subtable
        (let ((record (assoc string2 (cdr subtable))))
          (if record
              (cdr record)
              #f))
        #f)))

(define (lm-record-bigram! lm string1 string2)
  (let ((subtable (assoc string1 (cdr lm))))
    (if subtable
        (let ((record (assoc string2 (cdr subtable)))
              (count (assoc '_count (cdr subtable))))

          (set-cdr! count (+ (cdr count) 1)) ;; Increment the key count.

          (if record
              (set-cdr! record (+ (cdr record) 1))
              (set-cdr! subtable
                        (cons (cons string2 1)
                              (cdr subtable)))))
        (set-cdr! lm
                  (cons (list string1
                              (cons '_count 1)
                              (cons string2 1))
                        (cdr lm))))))

                        (define (count-words-in-lm lm)
                          (let ((acc 0))
                            (for-each (lambda (x)
                                        (display x)
                                        (set! acc (+ acc (length x))) )
                                      (cdr lm))
                            acc))
